import React from "react";
import { StyledSvg } from "./svg.styled-component";

const Info = ({ width = "24px", height = "24px", ...rest }) => {
  return (
    <StyledSvg {...rest} width={width} height={height}>
      <g id="info-icon" transform="translate(-257 -581)">
        <path
          id="Subtraction_1"
          data-name="Subtraction 1"
          d="M12,24A12,12,0,0,1,3.515,3.515,12,12,0,1,1,20.485,20.485,11.922,11.922,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z"
          transform="translate(257 581)"
        />
        <rect
          id="Rectangle_2"
          data-name="Rectangle 2"
          width="2.2"
          height="9.5"
          rx="1.1"
          transform="translate(268 590)"
        />
        <circle
          id="Ellipse_6"
          data-name="Ellipse 6"
          cx="1.1"
          cy="1.1"
          r="1.1"
          transform="translate(268 587)"
        />
      </g>
    </StyledSvg>
  );
};

export default Info;
