import Avvvatars from "avvvatars-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MemoArrowDown from "@/components/Icons/ArrowDownIcon";

const Profile = ({
  profileStyle,
  userName,
  role,
  onLogoutClick,
}: {
  profileStyle: "shape" | "character";
  userName: string;
  role: string;
  onLogoutClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <DropdownMenu
      aria-label="profile button"
      onOpenChange={(open) => {
        setDropDownOpen(open);
      }}
    >
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant={"ghost"}
          size={"lg"}
          className="h-max w-[300px] select-none px-4 py-2"
        >
          <div className="flex flex-row items-center justify-start gap-5">
            <Avvvatars value={userName} style={profileStyle} size={60} />
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="mr-[10px] inline-block w-[164px] truncate text-start text-xl font-medium not-italic">
                  {userName}
                </p>
                <span
                  className={cn([
                    "translate-y-[2px] duration-300 ease-in",
                    dropDownOpen && "translate-y-0 rotate-180",
                  ])}
                >
                  <MemoArrowDown />
                </span>
              </div>
              <div>
                <p className="text-start text-base font-medium not-italic">
                  {role}
                </p>
              </div>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] pl-[96px]">
        <div className="flex flex-col items-stretch rounded-lg border bg-white p-1 shadow-md">
          <Button
            tabIndex={1}
            type="button"
            variant={"ghost"}
            size={"lg"}
            className="justify-start px-4 text-start text-[18px] font-medium not-italic hover:text-[#4B2C73]"
            onClick={onLogoutClick}
          >
            Logout
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
