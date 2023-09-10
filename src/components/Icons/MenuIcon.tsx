import * as React from "react";

function MenuIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width={30} height={22} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.125 12.833H1.875C.825 12.833 0 12.027 0 11s.825-1.833 1.875-1.833h26.25C29.175 9.167 30 9.973 30 11s-.825 1.833-1.875 1.833zm0-9.166H1.875C.825 3.667 0 2.86 0 1.833 0 .807.825 0 1.875 0h26.25C29.175 0 30 .807 30 1.833c0 1.027-.825 1.834-1.875 1.834zM1.875 18.333h26.25c1.05 0 1.875.807 1.875 1.834C30 21.193 29.175 22 28.125 22H1.875C.825 22 0 21.193 0 20.167c0-1.027.825-1.834 1.875-1.834z"
        fill="#8B3DFF"
      />
    </svg>
  );
}

const MemoMenuIcon = React.memo(MenuIcon);
export default MemoMenuIcon;
