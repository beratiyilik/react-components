import React from "react";
import { StyledSvg } from "./svg.styled-component";

const Warning = ({ width = "24px", height = "24px", ...rest }) => {
  return (
    <StyledSvg {...rest} width={width} height={height}>
      <g id="warning" transform="translate(-320 -584)">
        <path
          id="Subtraction_2"
          data-name="Subtraction 2"
          d="M12,24A12,12,0,0,1,3.515,3.515,12,12,0,1,1,20.485,20.485,11.922,11.922,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z"
          transform="translate(320 584)"
        />
        <g id="Group_2" data-name="Group 2" transform="translate(2.422 -27)">
          <path
            id="Path_2"
            data-name="Path 2"
            d="M1.2.438a.884.884,0,0,1,.828.663l.516,6.962A1.382,1.382,0,0,1,1.1,9.5,1.346,1.346,0,0,1-.3,8.063l.2-2.641L.278,1.1A.834.834,0,0,1,1.2.438Z"
            transform="translate(331.122 626.5) rotate(180)"
          />
          <circle
            id="Ellipse_6"
            data-name="Ellipse 6"
            cx="1.25"
            cy="1.25"
            r="1.25"
            transform="translate(331.25 629.5) rotate(180)"
          />
        </g>
      </g>
    </StyledSvg>
  );
};

export default Warning;
