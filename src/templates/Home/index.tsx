import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import MemoSearchIcon from "@/components/Icons/SearchIcon";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Layout from "./components/layout";
import HomeNavbar from "./components/Navbar";
import Card from "./components/Card";
import { useNavigate } from "react-router-dom";
import MainBanner from "@/assets/main_banner.png";

const HomeTemplate = () => {
  const [select, setSelect] = React.useState("FOOD");
  const navigate = useNavigate();
  return (
    <Layout>
      <HomeNavbar />
      <Carousel
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        swipeable={true}
        autoPlay={true}
      >
        <div className="h-[696px] w-full">
          <img src={MainBanner} />
        </div>
        <div className="h-[696px] w-full">
          <img src={MainBanner} />
        </div>
        <div className="h-[696px] w-full">
          <img src={MainBanner} />
        </div>
      </Carousel>

      <div className="font-libre py-[100px] pb-[41px] text-center text-[50px] font-normal capitalize text-[#292929]">
        Featured Services & Latest Promotions
      </div>
      <div className="flex justify-center">
        <div className="relative h-[3px] w-[182px] bg-[#D9D9D9]">
          <div className="absolute -top-[30%] left-[30%] h-[5px] w-[80px] bg-[#8B3DFF]"></div>
        </div>
      </div>
      <div className=" mx-auto mt-[67px] flex h-[78px] max-w-[1336px] items-center rounded-full border-[1px]  border-gray-100 bg-white">
        <Select
          value={select}
          onValueChange={(value) => {
            setSelect(value);
          }}
        >
          <SelectTrigger className="flex h-[78px] w-[173px] items-center justify-center rounded-none rounded-s-full px-3 py-2 text-start text-[20px] font-medium not-italic">
            <p className={"text-[#292929]"}>{select ? select : "FOOD"}</p>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Status">Status</SelectItem>
              <SelectItem value="Role">Role</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          className="h-[78px] flex-1 rounded-none bg-white text-[20px] font-normal not-italic text-[#363535]"
          placeholder="Search Food Name"
        />
        <button className="mx-2 flex h-[65px] w-[65px] items-center justify-center rounded-full border bg-[#8B3DFF]">
          <MemoSearchIcon width={"25px"} height={"25px"} />
        </button>
      </div>
      <div className="mx-auto mt-12 flex flex-wrap justify-center gap-24">
        {Array.from({ length: 100 }).map((_, index) => {
          return (
            <Card
              key={index}
              facebook={"fa"}
              telegram={"te"}
              instragram="i"
              title="Title"
              desc="Don't know where to start in?"
              onClick={() => {
                navigate({
                  pathname: "/profile",
                });
              }}
            />
          );
        })}
      </div>

      <div className="mt-28 flex justify-center bg-[#707070] bg-gradient-to-t from-[#8B3DFF] to-[#5E0FD3] ">
        <p className="flex h-[110px] items-center text-[20px] font-normal capitalize text-white">
          Lörem ipsum sedubel anatis.Lörem ipsum sedubel anatis.
        </p>
      </div>
    </Layout>
  );
};

export default HomeTemplate;
