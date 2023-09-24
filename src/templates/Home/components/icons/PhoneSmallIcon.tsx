import * as React from "react";

function PhoneSmallIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.477.88a.369.369 0 010-.738A13.384 13.384 0 0129.86 13.525a.369.369 0 01-.737 0A12.645 12.645 0 0016.477.88zm0 6.102a6.544 6.544 0 016.543 6.543.369.369 0 00.738 0 7.28 7.28 0 00-7.281-7.28.369.369 0 000 .737zm4.628 22.63a4.984 4.984 0 005.5-1.12L29.3 25.8a2.338 2.338 0 00-.226-3.532l-3.986-3.079a1.259 1.259 0 00-1.67.108l-2.66 2.66a.37.37 0 01-.42.072A21.168 21.168 0 017.96 9.634a.366.366 0 01.085-.388l2.66-2.659a1.26 1.26 0 00.107-1.67L7.735.929A2.333 2.333 0 004.203.703L1.507 3.397a4.984 4.984 0 00-1.118 5.5 37.365 37.365 0 008.207 12.507 37.365 37.365 0 0012.509 8.207z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoPhoneSmallIcon = React.memo(PhoneSmallIcon);
export default MemoPhoneSmallIcon;
