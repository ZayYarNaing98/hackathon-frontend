import MemoFacebookIcon from "../icons/FacebookIcon";
import MemoInstragramIcon from "../icons/InstragramIcon";
import MemoTelegramIcon from "../icons/TelegramIcon";

type CardProps = {
  title: string;
  desc: string;
  facebook: string | undefined;
  telegram: string | undefined;
  instragram: string | undefined;
  onClick: () => void;
};

function Card(props: CardProps) {
  return (
    <div className="flex max-w-max flex-col justify-center gap-3">
      <div
        className="mx-auto aspect-[9/10] w-[364px] bg-slate-400"
        onClick={() => {
          props.onClick();
        }}
      >
        <img
          src="https://th.bing.com/th/id/OIP.-ykukAQoEaWAWrP7mYGrPQHaKi?pid=ImgDet&rs=1"
          className="cursor-pointer bg-cover object-cover"
        />
      </div>
      <h1 className="text-center text-[20px] font-normal">{props.title}</h1>
      <p className="mx-auto w-96 text-center text-[20px] font-normal">
        {props.desc}
      </p>
      <div className="flex justify-center gap-4">
        {props.facebook && (
          <button className="h-[42px] w-[42px] overflow-hidden rounded-full">
            <MemoFacebookIcon width={"42px"} height={"42px"} />
          </button>
        )}
        {props.telegram && (
          <button className="h-[42px] w-[42px] overflow-hidden rounded-full">
            <MemoTelegramIcon width={"42px"} height={"42px"} />
          </button>
        )}
        {props.instragram && (
          <button className="h-[42px] w-[42px] overflow-hidden rounded-full">
            <MemoInstragramIcon width={"42px"} height={"42px"} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
