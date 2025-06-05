import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "3c7e1ed5-3bd0-43ad-b599-c54e9949f01d");
  requestHeaders.set("x-createxyz-project-group-id", "d751623a-51e9-4e69-9088-f65beee246b1");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}