import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import DashboardTemplate from "./Dashboard";
import DashboardLoginTemplate from "@/templates/Dashboard/Login";
import NotFound404Page from "./NotFound404";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense>
          <DashboardLoginTemplate />
        </Suspense>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <Suspense>
          <DashboardTemplate />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense>
          <NotFound404Page />
        </Suspense>
      ),
    },
  ],
  {
    basename: "/",
  },
);

export default router;
