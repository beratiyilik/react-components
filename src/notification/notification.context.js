import React, { createContext, useContext, useMemo, useState } from "react";
import Notifications from "./notifications.component";
import { uuid } from "../utilities";
import { NotifyTypes } from "./notification.constants";
import { NOTIFICATION_DISPLAY_DURATION } from "./notification.constants";

const NotificationContext = createContext();

const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error(
      "useNotification must be used within NotificationProvider!"
    );
  return context;
};

export default useNotification;

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const hide = (id) =>
    setNotifications((currentNotifications) => [
      ...currentNotifications.filter((notification) => notification.id !== id),
    ]);

  const show = (
    message,
    type = NotifyTypes.INFO,
    duration = NOTIFICATION_DISPLAY_DURATION
  ) => {
    const id = uuid();
    setNotifications((currentNotifications) => [
      ...currentNotifications,
      {
        id,
        message,
        type,
        duration,
        hide: () => hide(id),
      },
    ]);
  };

  const success = (message) => show(message, NotifyTypes.SUCCESS);
  const error = (message) => show(message, NotifyTypes.ERROR);
  const info = (message) => show(message, NotifyTypes.INFO);
  const warning = (message) => show(message, NotifyTypes.WARNING);

  const value = useMemo(
    () => ({ show, hide, success, error, info, warning }),
    []
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <Notifications notifications={notifications} />
    </NotificationContext.Provider>
  );
};
