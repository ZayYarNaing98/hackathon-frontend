import * as React from "react";

function ArrowDown(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width={14} height={8} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.608 7.744l6.14-6.23a.913.913 0 000-1.258.875.875 0 00-1.236 0L7 5.866 1.488.257a.874.874 0 00-1.237 0 .913.913 0 000 1.259l6.12 6.229a.874.874 0 001.237 0z"
        fill="#8B3DFF"
      />
    </svg>
  );
}

const MemoArrowDown = React.memo(ArrowDown);
export default MemoArrowDown;
