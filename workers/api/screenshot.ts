import puppeteer, { Browser } from "@cloudflare/puppeteer";
import { Context } from "hono";
import { HonoEnv } from "../types";

const REVALIDATION_TIME = 60 * 60 * 1000; // 1 hour

type AllowedWebsites = "github" | "fira" | "ficus";

/**
 * Take a screenshot of a website
 */
async function takeScreenshot(target: AllowedWebsites, browser: Browser): Promise<Buffer> {
  const page = await browser.newPage();

  // Set zoom level for better content visibility
  await page.setViewport({
    width: 1400,
    height: 860,
    deviceScaleFactor: 1.5,
  });

  let targetUrl: string;
  if (target === "github") {
    targetUrl = "https://github.com/molefrog";
  } else if (target === "fira") {
    targetUrl = "https://firaresearch.com";
  } else if (target === "ficus") {
    targetUrl = "https://ficus.io";
  } else {
    throw new Error("Invalid target");
  }

  await page.goto(targetUrl);

  // Wait for the page to load
  await page.waitForSelector("body", { timeout: 10000 });

  // Hide the GitHub header
  await page.addStyleTag({
    content: `
      /* Hide the GitHub header */
      header[role="banner"] {
        display: none !important;
      }
    `,
  });

  if (target === "github") {
    // wait for the activity to load
    await page.waitForSelector(".js-calendar-graph", { timeout: 5000 });
  }

  // Hide scrollbars using Chrome DevTools Protocol (CDP)
  const client = await page.target().createCDPSession();
  await client.send("Emulation.setScrollbarsHidden", { hidden: true });

  const screenshotBuffer = await page.screenshot({
    type: "webp",
    quality: 85,
    fullPage: false,
  });

  await page.close();
  return screenshotBuffer;
}

/**
 * Take a screenshot and create a Response with proper headers
 * Internally manages browser lifecycle
 */
async function createScreenshotResponse(
  target: AllowedWebsites,
  browserEnv: HonoEnv["Bindings"]["BROWSER"]
): Promise<Response> {
  const browser = await puppeteer.launch(browserEnv);
  try {
    const screenshotBuffer = await takeScreenshot(target, browser);

    return new Response(screenshotBuffer, {
      headers: {
        "content-type": "image/webp",
        "cache-control": "public, max-age=3600, s-maxage=604800", // 1 hour browser cache, 7 days CDN cache
        date: new Date().toUTCString(),
        // Add a custom header with timestamp that won't be modified by CDN
        "x-screenshot-time": new Date().toISOString(),
      },
    });
  } finally {
    await browser.close();
  }
}

export async function handleScreenshot(c: Context<HonoEnv>) {
  const website = c.req.param("website") as AllowedWebsites;

  // Create cache key using the request URL
  const cacheUrl = new URL(c.req.url);
  const cache = (caches as any).default;

  /**
   * Check if a cached response needs revalidation
   */
  function needsRevalidation(response: Response): boolean {
    const timeHeader = response.headers.get("x-screenshot-time");

    if (!timeHeader) {
      // No timestamp header, needs revalidation
      return true;
    }

    const age = Date.now() - new Date(timeHeader).getTime();
    return age >= REVALIDATION_TIME;
  }

  /**
   * Trigger background revalidation
   */
  function triggerRevalidation() {
    c.executionCtx.waitUntil(
      (async () => {
        try {
          const response = await createScreenshotResponse(website, c.env.BROWSER);
          await cache.put(cacheUrl, response.clone());
          console.log("Background revalidation completed");
        } catch (error) {
          console.error("Background revalidation failed:", error);
        }
      })()
    );
  }

  try {
    // Check if screenshot is cached
    const cachedResponse = await cache.match(cacheUrl);

    if (cachedResponse) {
      if (needsRevalidation(cachedResponse)) {
        console.log("Serving stale cached screenshot, revalidating in background");
        triggerRevalidation();
      } else {
        console.log("Serving fresh cached screenshot");
      }

      return cachedResponse;
    }

    // No cached response, take a new screenshot
    console.log("No cached screenshot found, generating new one");
    const response = await createScreenshotResponse(website, c.env.BROWSER);

    // Store in cache
    c.executionCtx.waitUntil(cache.put(cacheUrl, response.clone()));

    return response;
  } catch (error) {
    console.error("Screenshot error:", error);
    return c.text(`Failed to capture screenshot ${error}`, 500);
  }
}
