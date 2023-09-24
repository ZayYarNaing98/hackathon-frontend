import * as React from "react";

function WarningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 27 25" fill="none" {...props}>
      <path
        d="M23.506 24.308H3.496A3.452 3.452 0 01.473 22.56a3.449 3.449 0 01.002-3.489L10.48 1.744A3.45 3.45 0 0113.501 0c1.261 0 2.393.653 3.023 1.744l10.003 17.328c.63 1.094.63 2.4 0 3.491a3.453 3.453 0 01-3.02 1.745zM13.501 2.25c-.215 0-.751.06-1.072.62L2.42 20.196a1.22 1.22 0 000 1.242c.108.186.429.62 1.075.62h20.01c.646 0 .965-.434 1.072-.62a1.215 1.215 0 000-1.242L14.575 2.87a1.217 1.217 0 00-1.074-.62z"
        fill="#FD346E"
      />
      <path
        d="M13.691 15.704a1.124 1.124 0 01-1.125-1.125V8.386a1.124 1.124 0 112.25 0v6.194c0 .621-.503 1.124-1.125 1.124zM13.693 19.677a1.35 1.35 0 100-2.7 1.35 1.35 0 000 2.7z"
        fill="#FD346E"
      />
    </svg>
  );
}

const MemoWarningIcon = React.memo(WarningIcon);
export default MemoWarningIcon;
