import type { NextFetchEvent, NextRequest } from "next/server";

import { NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { origin } = req.nextUrl;

  if (!req.cookies.get("token")) return NextResponse.redirect(origin);

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/:path*",
};
