import * as React from "react";

function ProfileUser(
  props: React.SVGProps<SVGSVGElement> & {
    fillColor: string;
  },
) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 19 22" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 0c3.265 0 5.912 2.444 5.912 5.432 0 3.014-2.647 5.458-5.912 5.458-3.235 0-5.882-2.444-5.882-5.458C3.618 2.444 6.265 0 9.5 0zm0 11.515c5.265 0 9.5 4.481 9.5 10.022v.054H0v-.054c0-5.54 4.265-10.022 9.5-10.022z"
        fill={props.fillColor ?? "#fff"}
      />
    </svg>
  );
}

const MemoProfileUser = React.memo(ProfileUser);
export default MemoProfileUser;
