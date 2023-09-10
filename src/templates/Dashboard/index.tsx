import Protected from "@/components/Auth/Protected";
import { useDashboardStore } from "@/stores/dashboard";
import { useLayoutStore } from "@/stores/layout";
import { DashboardNavbar } from "@/templates/Dashboard/components/Navbar";
import { useDashboardLogout, useTitle } from "@/utils";
import DashboardSidebar from "./components/Sidebar";
import Layout from "./components/Layout";

const DashboardTemplate = () => {
  const toggleMenu = useDashboardStore((store) => store.toggleMenu);
  const dashboardMode = useLayoutStore((store) => store.dashboardMode);
  const dashboardLogout = useDashboardLogout();

  useTitle("Dashboard");
  dashboardMode();

  return (
    <Protected>
      <Layout>
        <DashboardSidebar />
        <DashboardNavbar
          onLogoutClick={dashboardLogout}
          onMenuClick={toggleMenu}
          profile={{
            userName: "Zayar Naing",
            profileStyle: "shape",
            role: "Admin",
          }}
        />
      </Layout>
    </Protected>
  );
};

export default DashboardTemplate;
