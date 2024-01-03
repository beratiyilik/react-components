import { Success, Error, Info, Warning } from "./icons";
import {
  NotifyTypes,
  SUCCESS,
  ERROR,
  INFO,
  WARNING,
} from "./notification.constants";

const states = [
  {
    type: NotifyTypes.SUCCESS,
    title: SUCCESS,
    Icon: Success,
    colorPropName: "green",
  },
  {
    type: NotifyTypes.ERROR,
    title: ERROR,
    Icon: Error,
    colorPropName: "red",
  },
  {
    type: NotifyTypes.INFO,
    title: INFO,
    Icon: Info,
    colorPropName: "blue",
  },
  {
    type: NotifyTypes.WARNING,
    title: WARNING,
    Icon: Warning,
    colorPropName: "yellow",
  },
];

export const getState = (type) => states.find((state) => state.type === type);
