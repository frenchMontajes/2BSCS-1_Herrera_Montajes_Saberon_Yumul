import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";


interface RootRouteContext {
  queryClient: QueryClient;

}

export const Route = createRootRouteWithContext<RootRouteContext>()({
  component: Component,
  notFoundComponent: Component404,
});

function Component() {
  return (
    <>
      <Outlet />
      {process.env.NODE_ENV === "production" ? null : (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </>
  );
}

function Component404() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-bold">404</h1>
        <h1 className="text-xl">Page not found</h1>
      </div>
    </div>
  );
}
