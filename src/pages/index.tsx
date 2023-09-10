import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import DashboardTemplate from "./Dashboard";
import DashboardLoginTemplate from "@/templates/Dashboard/Login";

const router = createBrowserRouter([
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
]);

export default router;
