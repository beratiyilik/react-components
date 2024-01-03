import React from "react";
import { StyledNotificationWrapper } from "./notification.styled-components";
import Notification from "./notification.component";

const Notifications = ({ notifications }) => {
  if (!notifications || !notifications.length || notifications.length === 0)
    return null;
  return (
    <StyledNotificationWrapper>
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </StyledNotificationWrapper>
  );
};

export default Notifications;
