import React from "react";

export const ComponentRenderer = ({ component, ...props }) => {
  const Component = component;
  if (typeof Component === "function") return <Component {...props} />;

  // if (typeof Component === "object") return Component;
  if (React.isValidElement(Component)) return Component;

  if (typeof Component === "string") return <>{Component}</>;

  return null;
};
