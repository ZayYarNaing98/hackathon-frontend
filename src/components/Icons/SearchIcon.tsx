import * as React from "react";

function SearchIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 27 27" fill="none" {...props}>
      <path
        d="M12.196 3.024a9.167 9.167 0 017.19 14.85l-.642.864-.838.668a9.167 9.167 0 11-5.71-16.382zm0-2.62a11.786 11.786 0 107.32 21.019l5.003 5.002a.93.93 0 00.641.249 1.532 1.532 0 001.048-.472 1.31 1.31 0 00.223-1.689l-5.003-5.002A11.785 11.785 0 0012.196.405z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoSearchIcon = React.memo(SearchIcon);
export default MemoSearchIcon;
