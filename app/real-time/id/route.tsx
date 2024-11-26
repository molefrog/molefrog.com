import { NextResponse } from "next/server";

export const dynamic = "force-static";

// it's a static mock endpoint that is only used in development
// see functions/real-time/id.js for real implementation
export async function GET() {
  const data = {
    id: "_localhost",
    name: "localhost",
  };

  return NextResponse.json(data);
}
