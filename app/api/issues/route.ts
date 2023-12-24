import { NextRequest } from "next/server";

export function POST(request: NextRequest) {
  const body = await request.json();
}
