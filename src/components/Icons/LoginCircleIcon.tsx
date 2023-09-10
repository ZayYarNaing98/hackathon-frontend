import * as React from "react";

function LoginCircleIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width={481} height={"100vh"} fill="none" {...props}>
      <path
        d="M480 467.5c2.5-537-552.5-661-573-668.5l-303 5 50 1167.5c273.167 11 824-74.4 826-504z"
        fill="url(#prefix__paint0_linear_122_497)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_122_497"
          x1={63}
          y1={-7}
          x2={70}
          y2={718.5}
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
