import styled, { css } from "styled-components";

const Svg = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})`
  line-height: 0;
  & path {
    fill: "";
  }
  & g {
    stroke: "";
  }
`;

export const StyledSvg = styled(Svg)`
  ${({ isClickable }) => css`
    cursor: ${isClickable ? "pointer" : "default"};
  `}
`;
