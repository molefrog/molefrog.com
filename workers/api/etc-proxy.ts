import { Context } from "hono";

const rewrites: Record<string, string> = {
  "pid-neural-network": "https://molefrog.github.io/pidnn-talk",
  "stateful-animations": "https://molefrog.github.io/stateful-animations",
  "rye-js": "https://molefrog.github.io/rye",
  knife: "https://molefrog.github.io/knife",
};

export async function handleEtcProxy(c: Context) {
  const url = new URL(c.req.url);

  // Extract project name from /etc/project-name/path
  const pathParts = url.pathname.split("/").filter((part) => part);

  if (pathParts.length < 2 || pathParts[0] !== "etc") {
    return c.text("(ﾉ´ヮ`)ﾉ*: [404]", 404);
  }

  const projectName = pathParts[1];
  const remainingPath = pathParts.slice(2);

  if (!(projectName in rewrites)) {
    return c.text("(ﾉ´ヮ`)ﾉ*: [404]", 404);
  }

  // Handle trailing slash redirects
  if (remainingPath.length === 0 && !url.pathname.endsWith("/")) {
    return c.redirect(url.pathname + "/", 301);
  }

  // Build the proxy URL
  const targetPath = remainingPath.length > 0 ? "/" + remainingPath.join("/") : "";
  const targetURL = new URL(rewrites[projectName] + targetPath);
  targetURL.search = url.search;

  // Create a new request to proxy
  const proxyRequest = new Request(targetURL.toString(), {
    method: c.req.method,
    headers: c.req.header(),
    body: c.req.raw.body,
  });

  // Fetch and return the proxied response
  return fetch(proxyRequest);
}
