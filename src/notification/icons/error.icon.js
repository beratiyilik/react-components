import React from "react";
import { StyledSvg } from "./svg.styled-component";

const Error = ({ width = "24px", height = "24px", ...rest }) => {
  return (
    <StyledSvg {...rest} width={width} height={height}>
      <g id="error-icon" transform="translate(-293 -611)">
        <path
          id="Subtraction_3"
          data-name="Subtraction 3"
          d="M12,24A12,12,0,0,1,3.515,3.515,12,12,0,1,1,20.485,20.485,11.922,11.922,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z"
          transform="translate(293 611)"
        />
        <path
          id="Union_1"
          data-name="Union 1"
          d="M7.354,8.91,4.843,6.4l-2.51,2.51A1.1,1.1,0,0,1,.778,7.354l2.51-2.51L.778,2.334A1.1,1.1,0,0,1,2.334.778l2.51,2.51L7.354.778A1.1,1.1,0,0,1,8.909,2.334L6.4,4.844l2.51,2.51A1.1,1.1,0,1,1,7.354,8.91Z"
          transform="translate(300.544 618.544)"
        />
      </g>
    </StyledSvg>
  );
};

export default Error;
