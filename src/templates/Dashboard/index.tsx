import Protected from "@/components/Auth/Protected";
import { useDashboardStore } from "@/stores/dashboard";
import { useLayoutStore } from "@/stores/layout";
import { DashboardNavbar } from "@/templates/Dashboard/components/Navbar";
import { useDashboardLogout, useTitle } from "@/hooks";
import DashboardSidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import DashboardNavbarTitle from "./components/Navbar/DashboardNavbarTitle";
import DashboardTable from "./components/Table/DashboardTable";
import DashboardTableFooter from "./components/Table/DashboardTableFooter";
import { Toaster } from "@/components/ui/toaster";
import { useQueryUser, useQueryUserBy } from "@/api/user/hooks";
import { useEffect, useState } from "react";
import { UserApiResponse } from "@/api/user/api";
import { APIsResponse } from "@/api";

const DashboardTemplate = () => {
  const [userData, setUserData] = useState<UserApiResponse[]>([]);
  const [userDataPangi, setUserDataPangi] = useState<
    APIsResponse<UserApiResponse>["meta"] | null
  >(null);

  const [toggleMenu, authInfo] = useDashboardStore((store) => [
    store.toggleMenu,
    store.authInfo,
  ]);

  const dashboardMode = useLayoutStore((store) => store.dashboardMode);
  const dashboardLogout = useDashboardLogout();

  const queryUser = useQueryUser();
  const queryUserBy = useQueryUserBy(authInfo.id);

  useTitle("Dashboard");
  dashboardMode();

  useEffect(() => {
    if (queryUser.isSuccess && queryUserBy.isSuccess) {
      setUserData(queryUser.data?.data);
      setUserDataPangi(queryUser.data?.meta);
    }
  }, [
    queryUser.data?.data,
    queryUser.data?.meta,
    queryUser.isSuccess,
    queryUserBy.data?.data,
    queryUserBy.isSuccess,
  ]);

  if (queryUser.isLoading && queryUserBy.isLoading) {
    return null;
  }

  console.log(queryUserBy);

  return (
    <Protected>
      <Layout>
        <DashboardSidebar />
        <DashboardNavbar
          onLogoutClick={dashboardLogout}
          onMenuClick={toggleMenu}
          profile={{
            userName: queryUserBy.data?.data[0].name,
            profileStyle:
              queryUserBy.data?.data[0].image === null ? "character" : "shape",
            role: queryUserBy.data?.data[0].roles,
          }}
        />
        <DashboardNavbarTitle />
        <DashboardTable userData={userData} setUserData={setUserData} />
        <DashboardTableFooter
          data={userDataPangi}
          setUserData={setUserData}
          setUserDataPangi={setUserDataPangi}
        />
        <Toaster />
      </Layout>
    </Protected>
  );
};

export default DashboardTemplate;
