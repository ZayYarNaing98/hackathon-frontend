import React from "react";
import { Button } from "@/components/ui/button";
import MemoMenuIcon from "@/components/Icons/MenuIcon";
import Profile from "../Profile";

export const DashboardNavbar = ({
  profile,
  onMenuClick,
  onLogoutClick,
}: {
  onMenuClick: React.MouseEventHandler<HTMLButtonElement>;
  onLogoutClick: React.MouseEventHandler<HTMLButtonElement>;
  profile: {
    userName: string;
    role: string;
    profileStyle: "character" | "shape";
  };
}) => {
  return (
    <nav className="sticky left-0 right-0 top-0 flex h-[100px] w-full items-center justify-between bg-white px-8 shadow-[0px_2px_10px_2px_rgb(0,0,0,0.10)]">
      <Button
        aria-label="menu button"
        variant="ghost"
        type="button"
        size={"icon"}
        className="h-14 min-w-[56px]"
        onClick={onMenuClick}
      >
        <MemoMenuIcon />
      </Button>
      <Profile
        onLogoutClick={onLogoutClick}
        profileStyle={profile?.profileStyle}
        role={profile?.role}
        userName={profile?.userName}
      />
    </nav>
  );
};
