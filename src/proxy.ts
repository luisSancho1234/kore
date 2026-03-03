import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

//se estiver autenticado => nem loga nem cadastra
//"next" "redirect"
const publicRoutes = [
  { path: "/sign-in", whenAuthenticated: "next" },
  { path: "/sign-up", whenAuthenticated: "next" },
  { path: "/board", whenAuthenticated: "next" },
];

const ROOT_ROUTE = "/sign-in";

export function proxy(request: NextRequest) {

  return NextResponse.next();

}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
