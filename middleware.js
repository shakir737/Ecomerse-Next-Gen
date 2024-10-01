
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
export { default } from 'next-auth/middleware';


export const config = {
  matcher: ["/", "/login","/dashboard/:path*", "/checkout"],
};

export async function middleware(request) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  // Redirect to dashboard if the user is already authenticated
  // and trying to access sign-in, sign-up, or home page
 
  return NextResponse.next();
}
