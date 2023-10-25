import { isAuthenticated } from "@/Utils/Auth";
import { NextResponse } from "next/server";


const protectedRoutes = ["/dashboard","profile","budget"];


export default function middleware(req) {
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}