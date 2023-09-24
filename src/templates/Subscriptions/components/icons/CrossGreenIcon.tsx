import * as React from "react";

function CrossGreenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M14 28C6.268 28 0 21.732 0 14S6.268 0 14 0s14 6.268 14 14-6.268 14-14 14zM8.78 13.66a1.5 1.5 0 00-2.06 2.18l4.5 4.25a1.5 1.5 0 002.214-.17l7-9a1.5 1.5 0 00-2.368-1.84l-5.986 7.696-3.3-3.117z"
        fill="#1CCF99"
      />
    </svg>
  );
}

const MemoCrossGreenIcon = React.memo(CrossGreenIcon);
export default MemoCrossGreenIcon;
