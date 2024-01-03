import styled from "styled-components";

const colors = {
  green: "#a9cf54",
  red: "#f0433f",
  blue: "#6fb7ba",
  yellow: "#f7e867",
  // #3d4c53
};

export const StyledNotificationWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  min-width: 300px;
  z-index: 1041;
  opacity: 1;
`;

export const StyledNotificationItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 5px;
  background-color: #FFFFFF;
  border-radius: 4px;
  max-width: 400px;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  box-shadow: 0 5px 40px rgb(0 0 0 / 25%);
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background: ${({ colorPropName }) => colors[colorPropName] ?? "#fff"};
  }
  svg {
    fill: ${({ colorPropName }) => colors[colorPropName] ?? "#fff"};
    width: 24px;
    height: 24px;
  }
`;

export const StyledNotificationIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  height: 24px;
`;

export const StyledNotificationMessageWrapper = styled.div`
  padding-right: 60px;
  padding-left: 10px;
  max-width: 380px;
`;

export const StyledNotificationTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 5px;
`;

export const StyledNotificationMessage = styled.div`
  font-size: 14px;
`;
