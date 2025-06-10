import { KVNamespace } from "@cloudflare/workers-types";

// Browser Worker interface for Puppeteer
interface BrowserWorker {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

// Cloudflare Workers environment bindings
export interface Bindings {
  ASSETS: any; // Static Assets binding
  BROWSER: BrowserWorker; // Browser Rendering binding
  KV: KVNamespace; // KV storage binding (kept for potential future use)
  // Add other bindings here as needed
}

// Hono app context type
export interface HonoEnv {
  Bindings: Bindings;
}
