import React from "react";

export const Renderer = ({ Component, ...props }) => {
  const isFunction = typeof Component === "function";
  const isObject = typeof Component === "object";
  const isString = typeof Component === "string";

  if (isFunction) return <Component {...props} />;

  if (isObject) return Component;

  if (isString) return <div>{Component}</div>;

  return null;
};
