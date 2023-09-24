import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import DashboardTemplate from "./Dashboard";
import DashboardLoginTemplate from "@/templates/Dashboard/Login";
import NotFound404Page from "./NotFound404";
import HomeTemplate from "@/templates/Home";
import ProfileTemplate from "@/templates/Profile";
import SubscriptionTemplate from "@/templates/Subscriptions";
import BusinessProfile from "@/templates/BusinessProfile";
import WorkingInProgressTemplate from "@/templates/WorkingInProgress";
import PaymentTemplate from "@/templates/Payment";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense>
          <HomeTemplate />
        </Suspense>
      ),
    },
    {
      path: "/in-progress",
      element: (
        <Suspense>
          <WorkingInProgressTemplate />
        </Suspense>
      ),
    },
    {
      path: "/payment",
      element: (
        <Suspense>
          <PaymentTemplate />
        </Suspense>
      ),
    },
    {
      path: "/business-profile",
      element: (
        <Suspense>
          <BusinessProfile />
        </Suspense>
      ),
    },
    {
      path: "/subscriptions",
      element: (
        <Suspense>
          <SubscriptionTemplate />
        </Suspense>
      ),
    },
    {
      path: "/profile",
      element: (
        <Suspense>
          <ProfileTemplate />
        </Suspense>
      ),
    },
    {
      path: "/auth/continue",
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
