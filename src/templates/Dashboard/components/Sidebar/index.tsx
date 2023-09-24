import MemoUserIcon from "@/components/Icons/UserIcon";
import { Button } from "@/components/ui/button";
import { SIDEBAR } from "@/constants";
import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/stores/dashboard";
import { useSidebarStore } from "../../stores";
import MemoUserActiveIcon from "@/components/Icons/UserActiveIcon";
import { MemoHackathon } from "@/templates/Home/components/icons/NavIcon";

const DashboardSidebar = () => {
  const isMenuOpen = useDashboardStore((store) => store.menu);
  const [sidebarIndex, setSidebarIndex] = useSidebarStore((store) => [
    store.sidebarIndex,
    store.setSidebarIndex,
  ]);

  const sidebarLists = [
    {
      icon: <MemoUserIcon />,
      iconActive: <MemoUserActiveIcon />,
      value: "User Management",
      sidebarIndex: SIDEBAR.USER_MANAGEMENT,
    },
  ];

  return (
    <section
      className={cn([
        "fixed bottom-0 left-0 top-0 z-50 flex w-[350px] flex-col items-stretch gap-1 bg-gradient-to-tl from-[#7724F3] to-[#8B3DFF] px-[30px]",
        !isMenuOpen && "invisible",
      ])}
    >
      <div className="mb-[25px] flex h-[100px] items-center justify-center border-b-[1px] border-[#D9D9D9]">
        <MemoHackathon width={"248px"} height={"30px"} />
      </div>
      {sidebarLists.map((i, index) => (
        <DashboardSidebarButton
          key={index}
          active={i.sidebarIndex === sidebarIndex}
          icon={i.icon}
          iconActive={i.iconActive}
          value={i.value}
          onClick={() => {
            setSidebarIndex(i.sidebarIndex);
          }}
        />
      ))}
    </section>
  );
};

export default DashboardSidebar;

const DashboardSidebarButton = ({
  value,
  icon,
  iconActive,
  active,
  onClick,
}: {
  value: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      onClick={onClick}
      variant={"ghost"}
      className={cn([
        "flex h-[55px] justify-start gap-[17.7px] px-4 text-start text-xl font-medium not-italic text-white hover:bg-[#5400c182] hover:text-white",
        active && "bg-[#5400c182]",
      ])}
    >
      {active ? iconActive : icon} {value}
    </Button>
  );
};
