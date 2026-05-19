import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/case-studies/branding/mushashi-delta') {
    return NextResponse.redirect(
      new URL('/case-studies/branding/musashi-delta', request.url),
      301
    )
  }
}

export const config = {
  matcher: '/case-studies/branding/mushashi-delta',
}