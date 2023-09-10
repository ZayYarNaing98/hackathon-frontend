import Protected from "@/components/Auth/Protected";
import { useDashboardStore } from "@/stores/dashboard";
import { useLayoutStore } from "@/stores/layout";
import { DashboardNavbar } from "@/templates/Dashboard/components/Navbar";
import { useTitle } from "@/utils";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "./components/Sidebar";
import Layout from "./components/Layout";

const DashboardTemplate = () => {
  const navigate = useNavigate();
  const toggleMenu = useDashboardStore((store) => store.toggleMenu);
  const dashboardMode = useLayoutStore((store) => store.dashboardMode);

  useTitle("Dashboard");
  dashboardMode();

  return (
    <Protected>
      <Layout>
        <DashboardSidebar />
        <DashboardNavbar
          onLogoutClick={() => {
            navigate({
              pathname: "/",
            });
          }}
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
