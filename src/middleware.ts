// middleware.js (or middleware.ts)
import {NextRequest, NextResponse} from 'next/server';
import {verifyToken} from "@/services";

export async function middleware(request:NextRequest) {
    const { pathname } = request.nextUrl;

    // Define routes that require authentication
    const protectedRoutes = ['/dashboard', '/profile', '/settings'];

    // Check if the requested route is protected
    const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    if (isProtectedRoute) {
        // Verify the token
        const isAuthenticated = await verifyToken(); // Replace with your token verification logic

        // If the user is not authenticated, redirect to the login page
        if (!isAuthenticated) {
            const loginUrl = new URL('/auth/sign-in/', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    // Allow the request to proceed if the route is not protected or the user is authenticated
    return NextResponse.next();
}