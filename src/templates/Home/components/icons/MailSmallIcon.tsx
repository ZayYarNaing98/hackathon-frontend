import * as React from "react";

function MailSmallIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.559V17c0 .796.316 1.559.879 2.121A2.996 2.996 0 003 20h22c.796 0 1.559-.316 2.121-.879A2.996 2.996 0 0028 17V3.559l-12.428 7.648a3 3 0 01-3.144 0L0 3.559zm.42-2.09l13.056 8.034a.999.999 0 001.048 0L27.58 1.469A2.996 2.996 0 0025 0H3A2.996 2.996 0 00.42 1.469z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoMailSmallIcon = React.memo(MailSmallIcon);
export default MemoMailSmallIcon;
