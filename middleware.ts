import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/career' || pathname === '/career/') {
    return NextResponse.redirect(new URL('/careers', request.url), 301)
  }

  if (pathname === '/case-studies/branding/mushashi-delta') {
    return NextResponse.redirect(
      new URL('/case-studies/branding/musashi-delta', request.url),
      301
    )
  }
}

// Matcher must list every path this middleware handles.
export const config = {
  matcher: [
    '/career',
    '/career/',
    '/case-studies/branding/mushashi-delta',
  ],
}
