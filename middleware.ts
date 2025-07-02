import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/auth", "/favicon.ico", "/api/auth"];

export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
		return NextResponse.next();
	}

	const token = req.cookies.get("next-auth.session-token") || req.cookies.get("__Secure-next-auth.session-token");

	if (!token) {
		const url = req.nextUrl.clone();
		url.pathname = "/auth";
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/admin/:path*", "/doctor/:path*", "/patient/:path*"],
};
