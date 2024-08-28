import { NextResponse } from "next/server";

// it's a static mock endpoint that is only used in development
// see functions/real-time/id.js for real implementation
export async function GET() {
  const data = {
    id: "1337-5f4d-4b0b-9a0c-7e4d3b1f9a7c",
    name: "localhost",
  };

  return NextResponse.json(data);
}
