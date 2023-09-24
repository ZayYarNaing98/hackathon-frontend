import * as React from "react";

function PostingIcon(
  props: React.SVGProps<SVGSVGElement> & {
    fillColor: string;
  },
) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 23 22" fill="none" {...props}>
      <path
        d="M16.684 19.65a.4.4 0 01-.404.404H2.35a.4.4 0 01-.404-.403V7.286h8.378l5.34-5.34H2.373A2.38 2.38 0 000 4.32v15.307A2.38 2.38 0 002.373 22H16.28a2.38 2.38 0 002.374-2.373V8.805l-1.97 1.97v8.876z"
        fill={props.fillColor ?? "#fff"}
      />
      <path
        d="M7.452 14.571c-.048.285.213.546.522.499l2.8-.356a1.936 1.936 0 001.163-.57l.143-.142-3.536-3.56-.143.142a2.003 2.003 0 00-.57 1.163l-.38 2.824zM22.213 2.302L20.22.332A1.117 1.117 0 0019.436 0c-.284 0-.57.095-.759.332L9.231 9.778l3.537 3.536 9.445-9.446a1.165 1.165 0 000-1.566z"
        fill={props.fillColor ?? "#fff"}
      />
    </svg>
  );
}

const MemoPostingIcon = React.memo(PostingIcon);
export default MemoPostingIcon;
