import { clerkMiddleware } from "@clerk/nextjs/server";
export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

{
  // "/" will be accessible to all users
  // publicRoutes: [
  //   '/',
  //   '/events/:id',
  //   '/api/webhook/clerk',
  //   '/api/webhook/stripe',
  //   '/api/uploadthing',
  // ],
  // ignoredRoutes: [
  //   '/api/webhook/clerk',
  //   '/api/webhook/stripe',
  //   '/api/uploadthing',
  // ],
}