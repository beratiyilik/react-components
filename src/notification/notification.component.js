import React, { useEffect, useState } from "react";
import {
  StyledNotificationItem,
  StyledNotificationIcon,
  StyledNotificationMessage,
  StyledNotificationTitle,
  StyledNotificationMessageWrapper,
} from "./notification.styled-components";
import { getState } from "./notification.config";
import { NOTIFICATION_DISPLAY_DURATION } from "./notification.constants";
import { NotifyTypes } from "./notification.constants";

const Notification = ({
  id,
  message,
  type = NotifyTypes.INFO,
  duration = NOTIFICATION_DISPLAY_DURATION,
  hide,
}) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => hide(), duration);
    setTimer(timeoutId);

    return () => clearTimeout(timeoutId);
  }, [hide, duration]);

  const pauseTimer = () => clearTimeout(timer);

  const resumeTimer = () => {
    clearTimeout(timer);
    setTimer(setTimeout(() => hide(), duration));
  };

  const { Icon, title, colorPropName } = getState(type);

  return (
    <StyledNotificationItem
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
      colorPropName={colorPropName}
    >
      <StyledNotificationIcon>
        <Icon />
      </StyledNotificationIcon>
      <StyledNotificationMessageWrapper>
        <StyledNotificationTitle>{title}</StyledNotificationTitle>
        <StyledNotificationMessage>{message}</StyledNotificationMessage>
      </StyledNotificationMessageWrapper>
    </StyledNotificationItem>
  );
};

export default Notification;
