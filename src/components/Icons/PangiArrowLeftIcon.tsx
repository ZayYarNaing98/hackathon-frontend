import React from "react";

const PangiArrowRightIcon = (
  props: React.SVGAttributes<SVGSVGElement> & { disable?: string },
) => {
  return (
    <svg width={9} height={17} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.712 9.184l-7.008 6.908c-.408.377-1.032.377-1.416 0a.984.984 0 010-1.391L6.6 8.5.288 2.299c-.384-.4-.384-1.014 0-1.391s1.008-.377 1.416 0l7.008 6.885c.384.4.384 1.014 0 1.39z"
        fill={props.disable === "true" ? "#8b3dff70" : "#8B3DFF"}
      />
    </svg>
  );
};

const MemoPangiArrowRightIcon = React.memo(PangiArrowRightIcon);
export default MemoPangiArrowRightIcon;
