import * as React from "react";

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 26 26" fill="none" {...props}>
      <path
        d="M17.31 9.008l-6.041 5.723-2.508-2.65a1.074 1.074 0 10-1.555 1.484l3.25 3.392a1.027 1.027 0 00.742.317.99.99 0 00.742-.282l6.818-6.465a1.06 1.06 0 00.035-1.483 1.025 1.025 0 00-1.483-.036z"
        fill="#8B3DFF"
      />
      <path
        d="M13 0a13 13 0 100 26 13 13 0 000-26zm0 23.88a10.88 10.88 0 110-21.76 10.88 10.88 0 010 21.76z"
        fill="#8B3DFF"
      />
    </svg>
  );
}

const MemoCheckIcon = React.memo(CheckIcon);
export default MemoCheckIcon;
