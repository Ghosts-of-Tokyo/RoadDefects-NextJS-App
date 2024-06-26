import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { ROUTES } from '@/utils/constants/routes';

export const middleware = (request: NextRequest) => {
  const { pathname } = new URL(request.url);
  console.log('@middleware');

  if (pathname === '/') {
    return NextResponse.redirect(new URL(ROUTES.TASKS.ROOT, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};
