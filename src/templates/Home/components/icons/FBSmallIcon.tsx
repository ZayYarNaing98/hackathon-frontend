import * as React from "react";

function FBSmallIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 42 42" fill="none" {...props}>
      <path fill="url(#prefix__pattern0)" d="M0 0h42v42H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0_458_14087"
            transform="scale(.01042)"
          />
        </pattern>
        <image
          id="prefix__image0_458_14087"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB60lEQVR4nO3avWsUURSG8dtEkNgZa0lnJxZ2luklIggpLSXYphMtUqUTe8HO0lT+A6ZNGxGx0U6CHyCCgcfCAWOQVZiduffc8/xguh2Yc17eO8uypUiSJElScMAV4B7wFHgFfAA+8dtn4Hi43gKvh8/tD/fsAXdqzxEKsAbsAEcsx8vaM4UAnAceAl+XtHgD+F/A9eH4mIINWAS4DXybaPkGsAiwCfyYcPkG8I9j5/vEyzeAvwFWh6+Nc/AdcBawO9PyDeAs4NLEL10DWAR4wLw8gk4D3hhAJcDVmZdvA04Dtpe01HfAY+AucAvYWHBd++MhMgOeLWH5j4CV2rOEBByMXP5+7RlC49fv+WPcrD1DaMCXkQGs154hNOBkZAAXa88QGuOdqz1DaIxU+/nDwwAMIDVsgAGkhg0wgNSwAW0tdEYXSo+I4WPpFTEcll4Rw4vSK2J4UnpFDDulV8SwVXpFDDdKr4jhcukV7Tvp+i8stO996RntOyg9o33PS89o317pGe27X3pG+zZr76gpjFT7+cPDAAwgNWyAAaSGDTCA1LABBpAaNsAAUsMGGEBq2AADSA0bYACpYQMMIDVsgAGkhg0wgNSwAQaQGjbAAFLDBhhAatgAA0gNG2AAqWEDDCA1bIAkSZKk0pefV66EP4n8NbIAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
}

const MemoFBSmallIcon = React.memo(FBSmallIcon);
export default MemoFBSmallIcon;
