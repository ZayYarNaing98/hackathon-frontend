import { MemoRightIcon } from "@/templates/Profile";
import React from "react";

type CompayCardProps = {
  title: string;
  desc: string;
  icon: any;
  ctaLabel: string;
};

function CompayCard(props: CompayCardProps) {
  return (
    <div className="mx-3 flex flex-col justify-center shadow-md">
      <div className="mx-auto flex h-56 w-[364px] flex-col items-center justify-center gap-4 bg-white">
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-blue-500">
          {props.icon}
        </div>
        <h1>{props.title}</h1>
        <p className="w-56 text-center">{props.desc}</p>
      </div>
      <button className="flex h-[60px] items-center justify-center gap-3 bg-[#F9F3FF] text-[#8B3DFF]">
        {props.ctaLabel} <MemoRightIcon fillPath="#8B3DFF" />
      </button>
    </div>
  );
}

export default CompayCard;
