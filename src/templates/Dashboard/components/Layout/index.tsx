import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/stores/dashboard";
import React from "react";

type LayoutInterface = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  const isMenuOpen = useDashboardStore((store) => store.menu);

  return (
    <section
      className={cn([
        "relative h-screen min-h-screen w-full min-w-full max-w-full overflow-y-auto",
        isMenuOpen ? "pl-[350px]" : "",
      ])}
    >
      {children}
    </section>
  );
};

export default Layout;
