import MemoUserActiveIcon from "@/components/Icons/UserActiveIcon";

const DashboardNavbarTitle = () => {
  return (
    <div className="sticky left-0 right-0 top-[100px] flex items-center justify-start gap-[18px] bg-white px-8 py-[29px] pr-[45px]">
      <div className="grid h-[55px] w-[55px] place-items-center rounded-md bg-[#8b3dff1a] ">
        <MemoUserActiveIcon fill="#8B3DFF" />
      </div>
      <p className="text-[25px] font-medium not-italic text-[#4B2C73]">
        User Management
      </p>
    </div>
  );
};

export default DashboardNavbarTitle;
