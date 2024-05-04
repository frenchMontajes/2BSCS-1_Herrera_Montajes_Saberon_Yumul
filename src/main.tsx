import "./globals.css";

import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { AuthContextProvider, useAuth } from "./auth";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: undefined!
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const auth = useAuth();

  ReactDOM.createRoot(rootElement).render(
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}  context={{ auth }} />
      </QueryClientProvider>
    </AuthContextProvider>
    ,
  );
}
