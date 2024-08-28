import { v4 as uuidv4 } from "uuid";
import cookie from "cookie";

export async function onRequest({ request }) {
  // Get the client's IP address
  const clientIP = request.headers.get("CF-Connecting-IP") || "127.0.0.1";

  // Parse cookies using the 'cookie' package
  const cookies = cookie.parse(request.headers.get("Cookie") || "");
  let uuid = cookies.id;

  // Generate a new UUID if none exists
  if (!uuid) {
    uuid = uuidv4();
  }

  // Make a request to the IP API with the client's IP address
  const apiResponse = await fetch(`http://ip-api.com/json/${clientIP}`);
  const data = await apiResponse.json();

  // Prepare the response data
  const responseData = {
    id: uuid,
    name: data.city || "Unknown",
  };

  // Set the HTTP-only cookie if a new UUID was generated
  const responseHeaders = {
    "Content-Type": "application/json",
  };

  if (!cookies.id) {
    responseHeaders["Set-Cookie"] = cookie.serialize("_rt-id", uuid, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  // Return the JSON response to the client
  return new Response(JSON.stringify(responseData), {
    headers: responseHeaders,
  });
}
