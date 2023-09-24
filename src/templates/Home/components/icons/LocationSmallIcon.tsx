import * as React from "react";

function LocationSmallIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 26 32" fill="none" {...props}>
      <path
        d="M13.052 5.707a3.596 3.596 0 012.49 6.135 3.595 3.595 0 01-5.082 0 3.592 3.592 0 010-5.082 3.584 3.584 0 012.592-1.053zM13 0C7.866 0 3.7 4.165 3.7 9.3c0 1.998.85 5.026 2.655 7.13L13 24.166l6.645-7.736c1.807-2.104 2.657-5.132 2.657-7.13C22.302 4.165 18.137 0 13 0zM4.07 20.08a.778.778 0 00-.74.537l-1.397 4.326h9.39l-4.18-4.864H4.072zM18.858 20.079l-4.176 4.864h9.385l-1.396-4.327a.781.781 0 00-.741-.537h-3.072zM1.443 26.454l-1.405 4.35a.778.778 0 00.74 1.016h24.444a.778.778 0 00.74-1.016l-1.405-4.35H1.443z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoLocationSmallIcon = React.memo(LocationSmallIcon);
export default MemoLocationSmallIcon;
