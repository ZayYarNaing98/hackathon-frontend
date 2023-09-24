import * as React from "react";

function CrossRedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M14 0C6.278 0 0 6.278 0 14s6.278 14 14 14 14-6.278 14-14S21.722 0 14 0zm5.983 16.977a2.135 2.135 0 010 3.006 2.095 2.095 0 01-1.503.62c-.56 0-1.09-.207-1.503-.62L14 17.006l-2.977 2.977a2.095 2.095 0 01-1.503.62c-.56 0-1.09-.207-1.503-.62a2.135 2.135 0 010-3.006L10.994 14l-2.977-2.977a2.135 2.135 0 010-3.006 2.135 2.135 0 013.006 0L14 10.994l2.977-2.977a2.135 2.135 0 013.006 0 2.135 2.135 0 010 3.006L17.006 14l2.977 2.977z"
        fill="#FD346E"
      />
    </svg>
  );
}

const MemoCrossRedIcon = React.memo(CrossRedIcon);
export default MemoCrossRedIcon;
