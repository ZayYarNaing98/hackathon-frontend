import Protected from "@/components/Auth/Protected";
import { useDashboardStore } from "@/stores/dashboard";
import { useLayoutStore } from "@/stores/layout";
import { DashboardNavbar } from "@/templates/Dashboard/components/Navbar";
import { useDashboardLogout, useTitle } from "@/utils";
import DashboardSidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import DashboardNavbarTitle from "./components/Navbar/DashboardNavbarTitle";
import DashboardTable from "./components/Table/DashboardTable";
import DashboardTableFooter from "./components/Table/DashboardTableFooter";

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
        <DashboardNavbarTitle />
        <DashboardTable />
        <DashboardTableFooter />
      </Layout>
    </Protected>
  );
};

export default DashboardTemplate;
