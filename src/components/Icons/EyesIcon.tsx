import * as React from "react";

function EyesIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width={26} height={15} fill="none" {...props}>
      <path
        d="M25.177 5.773C24.98 5.537 20.26 0 12.887 0 5.514 0 .795 5.537.597 5.773c-.796.952-.796 2.502 0 3.454C.796 9.463 5.515 15 12.888 15c7.373 0 12.092-5.537 12.29-5.773.797-.952.797-2.502 0-3.454zM17.466 7.5a4.584 4.584 0 01-4.579 4.578A4.584 4.584 0 018.31 7.5a4.584 4.584 0 014.578-4.578A4.584 4.584 0 0117.466 7.5z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoEyesIcon = React.memo(EyesIcon);
export default MemoEyesIcon;
