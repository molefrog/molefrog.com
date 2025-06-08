// Cloudflare Workers environment bindings
export interface Bindings {
  ASSETS: any; // Static Assets binding
  // Add other bindings here as needed
}

// Hono app context type
export interface HonoEnv {
  Bindings: Bindings;
}
