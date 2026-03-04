import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const publicRoutes = [
  { path: "/sign-in", whenAuthenticated: "redirect" },
  { path: "/sign-up", whenAuthenticated: "redirect" },
  { path: "/pricing", whenAuthenticated: "next" },
  { path: "/board", whenAuthenticated: "next" },
] as const;

const REDIRECT_IF_NOT_AUTHENTICATED_ROUTE = "sign-in";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("Requested Path:", path);

  const publicRoute = publicRoutes.find((route) => route.path === path);
  const token = request.cookies.get("token")?.value;

  if (!token && publicRoute) {
    return NextResponse.next();
  }

  if (!token && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_IF_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if (token && publicRoute && publicRoute.whenAuthenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/board";
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
