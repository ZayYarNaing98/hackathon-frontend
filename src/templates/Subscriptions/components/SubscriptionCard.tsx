import MemoChrownOne from "./icons/ChrownOne";
import MemoChrownTwo from "./icons/ChrownTwo";
import MemoChrownThree from "./icons/ChrownThree";
import MemoCheckIcon from "./icons/CheckIcon";

type SubscriptionCardProps = {
  title: string;
  level: number;
  price: number;
  list: string[];
  onClick: any;
  ctaLabel: string;
};

function SubscriptionCard(props: SubscriptionCardProps) {
  return (
    <div className="flex w-[500px] flex-col items-stretch  overflow-hidden rounded-lg shadow-md">
      <div className="relative flex h-[120px] items-center overflow-hidden bg-[#8B3DFF] px-[31px]">
        <h1 className="font-libre flex text-[31px] text-white">
          {props.title}
        </h1>
        <div className="absolute bottom-[0%] left-[50%] h-[361px] w-[361px] rounded-full bg-[#D9D9D9] opacity-20"></div>
        <div className="absolute left-[50%] top-0 h-[361px] w-[361px] rounded-full bg-[#D9D9D9] opacity-20"></div>
        <div className="absolute right-[31px]">
          {props.level === 1 && (
            <MemoChrownOne width={"72px"} height={"53px"} />
          )}
          {props.level === 2 && (
            <MemoChrownTwo width={"72px"} height={"53px"} />
          )}
          {props.level === 3 && (
            <MemoChrownThree width={"72px"} height={"53px"} />
          )}
        </div>
      </div>
      <div className="bg-white pb-8">
        <h1 className="font-libre flex items-center justify-center py-[53px] pb-[38px] text-center text-[50px] text-[#8B3DFF]">
          {props.price}
          <span className="font-sans text-[22px] font-medium text-black">
            MMK
          </span>
        </h1>
        <div>
          <div className="mx-auto w-[415px] rounded-lg bg-[#F9F3FF] p-[40px]">
            <ul>
              {props.list.map((i) => {
                return (
                  <li className="mb-2 flex items-center gap-2">
                    <MemoCheckIcon width={"26px"} height={"26px"} />
                    {i}
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => {
              props.onClick();
            }}
            className="mx-auto mt-11 flex h-[62px] w-[322px] items-center justify-center rounded-full bg-gradient-to-t from-[#8B3DFF] to-[#5E0FD3] text-center text-[18px] text-white"
          >
            {props.ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionCard;
