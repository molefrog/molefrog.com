import { Hono } from "hono";
import { handleRealTimeId } from "./api/real-time-id";
import { handleEtcProxy } from "./api/etc-proxy";
import { handleScreenshot } from "./api/screenshot";
import { HonoEnv } from "./types";

const app = new Hono<HonoEnv>();

// API Routes
app.get("/real-time/id", handleRealTimeId);
app.all("/etc/*", handleEtcProxy);
app.get("/screenshot/:website", handleScreenshot);

app.get("/cf", () => new Response("Hello, world!"));

// Serve static assets for all other routes
app.get("*", async (c) => {
  const response = await c.env.ASSETS.fetch(c.req.raw);

  // Handle 404s for static assets
  if (response.status === 404) {
    // Try to serve the 404.html page if it exists
    const notFoundResponse = await c.env.ASSETS.fetch(new Request(new URL("/404.html", c.req.url)));

    if (notFoundResponse.status === 200) {
      return new Response(notFoundResponse.body, {
        status: 404,
        headers: notFoundResponse.headers,
      });
    }

    // Fallback 404
    return c.text("(ﾉ´ヮ`)ﾉ*: [404]", 404);
  }

  return response;
});

export default app;
