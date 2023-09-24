import { useNavigate } from "react-router-dom";
import HomeNavbar from "../Home/components/Navbar";
import MemoWavePay from "./components/icons/WavePay";

function PaymentTemplate() {
  const navigate = useNavigate();
  return (
    <div className="h-screen overflow-y-scroll bg-[#F5F5F5]">
      <HomeNavbar />
      <div className="px-[150px]">
        <div>
          <div className="font-libre mt-[90px] flex items-center justify-start  gap-5 text-[40px]">
            <button
              onClick={() => {
                navigate({
                  pathname: "/subscriptions",
                });
              }}
            >
              <svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.1634 12.4216H5.95629L6.80984 11.568L15.1236 3.25429C15.7649 2.61295 15.7649 1.62234 15.1236 0.981005C14.4822 0.339665 13.4916 0.339665 12.8503 0.981004L0.981005 12.8503C0.339663 13.4916 0.339663 14.4822 0.981005 15.1236L12.9026 27.0451C13.2301 27.3727 13.627 27.5261 14.0131 27.5261C14.3992 27.5261 14.796 27.3727 15.1236 27.0451C15.7648 26.404 15.7649 25.4137 15.124 24.7723C15.1239 24.7722 15.1237 24.772 15.1236 24.7719L6.75867 16.4592L5.89863 15.6046H7.11111H29.9085C30.7827 15.6046 31.5 14.8873 31.5 14.0131C31.5 13.1389 30.7827 12.4216 29.9085 12.4216H7.1634Z"
                  fill="#8B3DFF"
                  stroke="#8B3DFF"
                />
              </svg>
            </button>
            Payment Method
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <div className="flex-1 rounded-md bg-white p-[42px] shadow-md">
            <div className="flex flex-1 items-center gap-3">
              <div className="grid h-[33px] w-[33px] place-content-center rounded-full bg-[#8B3DFF] text-[20px] text-white">
                1
              </div>
              <p className=" text-[22px] font-medium ">
                Choose Your Payment Method
              </p>
            </div>
            <div className=""></div>
          </div>
          <div className="flex-1 rounded-md bg-white p-[42px] shadow-md">
            <div className="flex flex-1 items-center gap-3">
              <div className="grid h-[33px] w-[33px] place-content-center rounded-full bg-[#8B3DFF] text-[20px] text-white">
                2
              </div>
              <p className="text-[22px] font-medium ">
                Check your plan information carefully
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentTemplate;
