import React from "react";
import { ToggleSwitch } from "../shared.components";

export const HeaderSelection = ({ passive, toggleAll, isAllSelected }) => {
    if (passive) return null;
    return <ToggleSwitch selected={isAllSelected} onChange={toggleAll} />;
  };
  