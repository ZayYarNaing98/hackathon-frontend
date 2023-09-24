import { useNavigate } from "react-router-dom";
import HomeNavbar from "../Home/components/Navbar";
import MemoWavePay from "./components/icons/WavePay";
import { useQuerySubscription } from "@/api/subscription/hooks";
import { useClientStore } from "@/stores/client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { useMutatePayment } from "@/api/payment/hooks";

function PaymentTemplate() {
  const navigate = useNavigate();
  const [auth, directPayment, setDirectPayment] = useClientStore((store) => [
    store.authInfo,
    store.directPayment,
    store.setDirectPayment,
  ]);
  const useMutationPayment = useMutatePayment({
    onSuccess() {
      setDirectPayment({ id: 0 });
      navigate({
        pathname: "/business-profile",
      });
    },
    onError() {},
  });
  const useQuerySubscr = useQuerySubscription(auth.id);
  const [toggle, setToggle] = useState(false);

  if (useQuerySubscr.isLoading) return null;

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
            <div className="flex gap-3">
              <div
                onClick={() => {
                  setToggle(!toggle);
                }}
                className={twMerge([
                  "mt-7 flex w-40 flex-col items-center justify-center rounded-md border-2 border-r border-solid",
                  !toggle && "border-[1px] border-[#8B3DFF]",
                ])}
              >
                <MemoWavePay width={"90px"} height={"90px"} />
                <p>Wavepay</p>
              </div>
            </div>
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
            <div className="mt-5 flex gap-5">
              <div className=" flex-1 rounded-lg border p-[26px]">
                Subscription plan Name <br />{" "}
                {useQuerySubscr.data?.data.data[0].name}
              </div>
              <div className=" flex-1 rounded-lg border p-[26px]">
                pricing
                <br />
                {useQuerySubscr.data?.data.data[0].price}
              </div>
            </div>
            <div className="mt-5 flex gap-5">
              <div className=" flex-1 rounded-lg border p-[26px]">
                <h1>Features</h1>
                <ul className="list-disc">
                  {useQuerySubscr.data?.data.data[0].features.map((i: any) => {
                    return <li>{i.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pt-7">
          <Button
            disabled={toggle}
            onClick={() => {
              useMutationPayment.mutate({
                subscription_id: directPayment.id,
                type: "KayMoney",
                profile_id: auth.id,
              } as any);
            }}
            className="ml-auto h-[60px] w-[269px] rounded-full bg-gradient-to-t from-[#8B3DFF] to-[#5E0FD3] text-[18px] font-normal not-italic text-white"
          >
            Confirm Subscription
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PaymentTemplate;
