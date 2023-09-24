import HomeNavbar from "../Home/components/Navbar";
import SubscriptionCard from "./components/SubscriptionCard";
import MemoCrossRedIcon from "./components/icons/CrossRedIcon";
import MemoCrossGreenIcon from "./components/icons/CrossGreenIcon";
import { appClientToken } from "@/stores/storage";
import { useClientStore } from "@/stores/client";
import { useNavigate } from "react-router-dom";

const SubscriptionTemplate = () => {
  const { getToken } = appClientToken();
  const [setDialogStatus] = useClientStore((store) => [store.setDialogStatus]);
  const token = getToken();
  const navigate = useNavigate();

  const featuresTable = [
    {
      label: "Free Register for Business Profile",
      base: true,
      standard: false,
      premium: true,
    },
    {
      label: "Free Register for Business Profile 2",
      base: false,
      standard: true,
      premium: true,
    },
  ];

  const onSubscribe = () => {
    if (token) {
      navigate({
        pathname: "/business-profile",
      });
    } else {
      setDialogStatus("signIn");
    }
  };

  return (
    <div className="h-screen overflow-y-auto pb-52">
      <HomeNavbar />
      <h1 className="font-libre mb-[40px] mt-[100px] text-center text-[50px]">
        Subscription and Pricing Plan
      </h1>
      <div className="flex justify-center">
        <div className="relative h-[3px] w-[182px] bg-[#D9D9D9]">
          <div className="absolute -top-[30%] left-[30%] h-[5px] w-[80px] bg-[#8B3DFF]"></div>
        </div>
      </div>
      <div className="container mt-20 flex justify-center gap-7 overflow-hidden">
        <SubscriptionCard
          onClick={onSubscribe}
          title="Basic Plan"
          level={1}
          price={10000}
          list={["2 posts (No Time Limit)", "Low Visiability"]}
          ctaLabel="Subscribe Now"
        />
        <SubscriptionCard
          onClick={onSubscribe}
          title="Standard Plan"
          level={2}
          price={20000}
          list={["4 posts (No Time Limit)", "Low Visiability"]}
          ctaLabel="Subscribe Now"
        />
        <SubscriptionCard
          onClick={onSubscribe}
          title="Premium Plan"
          level={3}
          price={30000}
          list={["6 posts (No Time Limit)", "Low Visiability"]}
          ctaLabel="Subscribe Now"
        />
      </div>
      <div className="container">
        <h1 className="font-libre py-[30px] text-[30px]">Features</h1>
        <div className="overflow-hidden rounded-md">
          <div className="flex h-[80px] items-center justify-start bg-gradient-to-t from-[#8B3DFF] to-[#5E0FD3] text-[22px] text-white">
            <div className="w-[50%] px-5 text-start">Features Name</div>
            <div className="w-[16%] text-center">Basic Plan</div>
            <div className="w-[16%] text-center">Standard Plan</div>
            <div className="w-[16%] text-center">Premium Plan</div>
          </div>
          {featuresTable.map((i) => {
            return (
              <div className="flex h-[80px] items-center justify-start text-[22px] text-black">
                <div className="w-[50%] px-5 text-start">{i.label}</div>
                <div className="flex w-[16%] items-center justify-center text-center">
                  {i.base ? <MemoCrossGreenIcon /> : <MemoCrossRedIcon />}
                </div>
                <div className="flex w-[16%] justify-center text-center">
                  {i.standard ? <MemoCrossGreenIcon /> : <MemoCrossRedIcon />}
                </div>
                <div className="flex w-[16%] justify-center text-center">
                  {i.premium ? <MemoCrossGreenIcon /> : <MemoCrossRedIcon />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionTemplate;
