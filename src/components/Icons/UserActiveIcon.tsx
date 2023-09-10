import * as React from "react";

function UserActiveIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width={20} height={25} fill="none" {...props}>
      <g fill="#fff" stroke="#fff">
        <path d="M9.652.5c2.906 0 5.237 2.32 5.237 5.328a5.213 5.213 0 01-5.237 5.237c-2.92 0-5.327-2.336-5.327-5.237A5.31 5.31 0 019.652.5zM5.828 13.43h7.649c2.91 0 5.328 2.418 5.328 5.328v5.237H.5v-5.237c0-2.91 2.417-5.327 5.328-5.327z" />
      </g>
    </svg>
  );
}

const MemoUserActiveIcon = React.memo(UserActiveIcon);
export default MemoUserActiveIcon;
