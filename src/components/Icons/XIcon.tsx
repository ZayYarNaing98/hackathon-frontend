import * as React from "react";

function X(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 19 19" fill="none" {...props}>
      <path
        d="M18.367.633a2.162 2.162 0 00-3.058 0L9.5 6.443 3.69.632A2.162 2.162 0 10.634 3.691L6.443 9.5l-5.81 5.81a2.162 2.162 0 003.058 3.057l5.809-5.81 5.81 5.81a2.162 2.162 0 103.057-3.058L12.557 9.5l5.81-5.81a2.162 2.162 0 000-3.057z"
        fill="#292929"
      />
    </svg>
  );
}

const XIcon = React.memo(X);
export default XIcon;
