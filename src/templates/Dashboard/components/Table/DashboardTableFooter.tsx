import APIs, { APIsResponse } from "@/api";
import { UserApiResponse } from "@/api/user/api";
import MemoPangiArrowRightIcon from "@/components/Icons/PangiArrowLeftIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/stores/dashboard";
import { twMerge } from "tailwind-merge";

type DafaultTableFooter = {
  data: APIsResponse<UserApiResponse>["meta"] | null;
  setUserData: any;
  setUserDataPangi: any;
};

function generatePaginationLinks(current: number, total: number) {
  const links = [];

  // Always show the first page
  links.push(1);

  if (current === 1) links.push(current + 1);

  // Show the current page
  if (current !== 1 && current !== total) {
    if (current - 1 !== 1) links.push(current - 1);
    links.push(current);
    links.push(current + 1);
  }

  // Show "..." if there are more than 3 pages
  if (total > 3 && current !== total - 1) {
    links.push("...");
  }

  // Show the last page
  if (total > 1 && current !== total - 1) {
    links.push(total - 1);
    links.push(total);
  }

  return links;
}

const DashboardTableFooter = (props: DafaultTableFooter) => {
  const isMenuOpen = useDashboardStore((store) => store.menu);
  const result = props.data ? props.data : null;

  if (!result) {
    return null;
  }

  if (!result || !result?.current_page || !result?.total_page) {
    return null;
  }

  if (result.total_page === 1) {
    return null;
  }

  if (result.total_page <= 5) {
    return (
      <div
        className={cn([
          "text-red absolute bottom-0 left-0 right-0 z-40 flex h-[100px] items-center justify-end gap-2 bg-white px-16 pr-[82px] shadow-[0px_2px_10px_2px_rgb(0,0,0,0.10)]",
          isMenuOpen ? "left-[350px]" : "",
        ])}
      >
        {Array.from({ length: result.total_page }).map((_, index) => {
          const page = index + 1;
          return (
            <Button
              size="icon"
              onClick={() => {
                APIs.userApi
                  .lists({ type: "page", value: page.toString() })
                  .then((data) => {
                    props.setUserData(data.data);
                    props.setUserDataPangi(data.meta);
                  });
              }}
              className={twMerge([
                "h-11 w-11",
                page === result.current_page
                  ? "bg-[#8B3DFF] text-white hover:bg-[#612ab3]"
                  : "bg-gray-100 text-black hover:bg-gray-200",
              ])}
            >
              {page}
            </Button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={cn([
        "text-red absolute bottom-0 left-0 right-0 z-40 flex h-[100px] items-center justify-end gap-2 bg-white px-16 pr-[82px] shadow-[0px_2px_10px_2px_rgb(0,0,0,0.10)]",
        isMenuOpen ? "left-[350px]" : "",
      ])}
    >
      <Button variant="ghost" size="icon" className="h-11 w-11 bg-gray-100">
        <MemoPangiArrowRightIcon disable="true" className="rotate-180" />
      </Button>
      {generatePaginationLinks(result.current_page, result.total_page).map(
        (i, key) => {
          return (
            <Button
              key={key}
              size="icon"
              className={twMerge([
                "h-11 w-11",
                i === result.current_page
                  ? "bg-[#8B3DFF] text-white hover:bg-[#612ab3]"
                  : "bg-gray-100 text-black hover:bg-gray-200",
              ])}
              onClick={() => {
                APIs.userApi
                  .lists({ type: "page", value: i.toString() })
                  .then((data) => {
                    props.setUserData(data.data);
                  });
              }}
            >
              {i}
            </Button>
          );
        },
      )}
      <Button variant="ghost" size="icon" className="h-11 w-11 bg-gray-100">
        <MemoPangiArrowRightIcon />
      </Button>
    </div>
  );
};

export default DashboardTableFooter;
