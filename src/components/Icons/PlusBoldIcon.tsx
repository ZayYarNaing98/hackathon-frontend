import * as React from "react";

function PlusIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width={17} height={17} fill="none" {...props}>
      <path
        d="M8.5 0a2.361 2.361 0 00-2.361 2.361V6.14H2.36a2.361 2.361 0 100 4.722H6.14v3.778a2.361 2.361 0 104.722 0V10.86h3.778a2.361 2.361 0 100-4.722H10.86V2.36A2.361 2.361 0 008.5 0z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoPlusIcon = React.memo(PlusIcon);
export default MemoPlusIcon;
