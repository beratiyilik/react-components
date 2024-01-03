import React from "react";
import { StyledSvg } from "./svg.styled-component";

const Success = ({ width = "18.29", height = "18.29", ...rest }) => {
  return (
    <StyledSvg
      {...rest}
      width={width}
      height={height}
      viewBox="0 0 18.29 18.29"
    >
      <g id="success-icon" transform="translate(0 0)">
        <path
          id="Path_42"
          data-name="Path 42"
          d="M11.144,2a9.144,9.144,0,1,0,9.144,9.144A9.144,9.144,0,0,0,11.144,2Zm0,16.982a7.838,7.838,0,1,1,7.838-7.838A7.838,7.838,0,0,1,11.144,18.982Z"
          transform="translate(-2 -2)"
        />
        <path
          id="Path_43"
          data-name="Path 43"
          d="M11.746,16.628,9.6,14.473,8.67,15.4l2.175,2.149a1.285,1.285,0,0,0,1.822,0l5.578-5.578-.927-.921Z"
          transform="translate(-4.313 -5.139)"
        />
      </g>
    </StyledSvg>
  );
};

export default Success;
