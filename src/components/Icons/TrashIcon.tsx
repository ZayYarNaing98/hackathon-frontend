import * as React from "react";

function TrashIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width={22} height={26} fill="none" {...props}>
      <path
        d="M22 5.5a2.75 2.75 0 01-2.75 2.75H2.75a2.75 2.75 0 110-5.5h4.583A2.75 2.75 0 0110.083 0h1.834a2.75 2.75 0 012.75 2.75h4.583A2.75 2.75 0 0122 5.5zm-4.583 4.583h1.833v12.834a2.75 2.75 0 01-2.75 2.75h-11a2.75 2.75 0 01-2.75-2.75V10.083h14.667zm-4.584 11a.917.917 0 001.834 0v-8.25a.917.917 0 00-1.834 0v8.25zm-5.5 0a.917.917 0 001.834 0v-8.25a.916.916 0 00-1.834 0v8.25z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoTrashIcon = React.memo(TrashIcon);
export default MemoTrashIcon;
