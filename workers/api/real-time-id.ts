import { Context } from "hono";
import { nanoid } from "nanoid";

const COOKIE_NAME = "_rt-id";

export async function handleRealTimeId(c: Context) {
  // Get the client's IP address
  const clientIP = c.req.header("CF-Connecting-IP") || "127.0.0.1";

  // Parse cookies
  const cookieHeader = c.req.header("Cookie") || "";
  const cookies = parseCookies(cookieHeader);
  let id = cookies[COOKIE_NAME];

  // Generate a new UUID if none exists
  if (!id) {
    id = nanoid(16);
  }

  // Make a request to the IP API with the client's IP address
  const apiResponse = await fetch(`http://ip-api.com/json/${clientIP}`);
  const data = await apiResponse.json();

  // Prepare the response data
  const responseData = {
    id: id,
    name: data.city || "Unknown",
  };

  // Create response
  const response = c.json(responseData);

  // Set the HTTP-only cookie if a new UUID was generated
  if (!cookies[COOKIE_NAME]) {
    const cookieValue = serializeCookie(COOKIE_NAME, id, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });

    response.headers.set("Set-Cookie", cookieValue);
  }

  return response;
}

// Cookie parsing utility (since we can't use the 'cookie' package in Workers)
function parseCookies(cookieHeader: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  if (!cookieHeader) return cookies;

  cookieHeader.split(";").forEach((cookie) => {
    const [name, ...rest] = cookie.trim().split("=");
    if (name && rest.length) {
      cookies[name] = rest.join("=");
    }
  });

  return cookies;
}

// Cookie serialization utility
interface CookieOptions {
  path?: string;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: string;
  maxAge?: number;
}

function serializeCookie(name: string, value: string, options: CookieOptions = {}): string {
  let cookie = `${name}=${value}`;

  if (options.path) cookie += `; Path=${options.path}`;
  if (options.httpOnly) cookie += "; HttpOnly";
  if (options.secure) cookie += "; Secure";
  if (options.sameSite) cookie += `; SameSite=${options.sameSite}`;
  if (options.maxAge) cookie += `; Max-Age=${options.maxAge}`;

  return cookie;
}
