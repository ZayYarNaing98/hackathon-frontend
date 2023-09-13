import MemoPangiArrowRightIcon from "@/components/Icons/PangiArrowLeftIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/stores/dashboard";

const DashboardTableFooter = () => {
  const isMenuOpen = useDashboardStore((store) => store.menu);

  return (
    <div
      className={cn([
        "text-red absolute bottom-0 left-0 right-0 z-40 flex h-[100px] items-center justify-end gap-2 bg-white px-16 pr-[82px] shadow-[0px_2px_10px_2px_rgb(0,0,0,0.10)]",
        isMenuOpen ? "left-[350px]" : "",
      ])}
    >
      <Button variant="ghost" size="icon" className="h-11 w-11 bg-gray-100">
        <MemoPangiArrowRightIcon disable className="rotate-180" />
      </Button>

      <Button size="icon" className="h-11 w-11 bg-[#8B3DFF] hover:bg-[#612ab3]">
        1
      </Button>
      <Button variant="ghost" size="icon" className="h-11 w-11 bg-gray-100">
        2
      </Button>
      <Button variant="ghost" size="icon" className="h-11 w-11 bg-gray-100">
        ...
      </Button>
      <Button variant="ghost" size="icon" className="h-11 w-11 bg-gray-100">
        5
      </Button>
      <Button variant="ghost" size="icon" className="h-11 w-11 bg-gray-100">
        <MemoPangiArrowRightIcon />
      </Button>
    </div>
  );
};

export default DashboardTableFooter;
