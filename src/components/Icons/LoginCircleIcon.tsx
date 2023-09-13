import * as React from "react";

function LoginCircleIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width={834} height={1080} fill="none" {...props}>
      <path
        d="M833.991 659.568C836.799-26.899 213.38-185.412 190.353-195L-150-188.608l56.164 1492.458c306.842 14.06 925.58-95.11 927.827-644.282z"
        fill="url(#prefix__paint0_linear_157_156)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_157_156"
          x1={365.584}
          y1={52.997}
          x2={375.767}
          y2={980.405}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8B3DFF" />
          <stop offset={1} stopColor="#AF7AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const MemoLoginCircleIcon = React.memo(LoginCircleIcon);
export default MemoLoginCircleIcon;
