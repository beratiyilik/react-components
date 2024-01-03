/* eslint-disable react-hooks/exhaustive-deps */
/*
import { useCallback, useState, useRef, useLayoutEffect } from "react";

const useLocalStorage = (key, initialValue, options) => {
  if (!key) throw new Error("useLocalStorage key may not be falsy");

  const deserializer = options
    ? options.raw
      ? (value) => value
      : options.deserializer
    : JSON.parse;

  const initializer = useRef((key) => {
    if (typeof window === "undefined") return initialValue;
    try {
      const serializer = options
        ? options.raw
          ? String
          : options.serializer
        : JSON.stringify;

      const localStorageValue = window.localStorage.getItem(key);

      if (localStorageValue) return deserializer(localStorageValue);
      else if (initialValue)
        window.localStorage.setItem(key, serializer(initialValue));

      return initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  const [state, setState] = useState(() => initializer.current(key));

  useLayoutEffect(() => setState(initializer.current(key)), [key]);

  const set = useCallback(
    (valOrFunc) => {
      try {
        const newState =
          typeof valOrFunc === "function" ? valOrFunc(state) : valOrFunc;
        if (typeof newState === "undefined") return;
        let value;

        if (options)
          if (options.raw)
            if (typeof newState === "string") value = newState;
            else value = JSON.stringify(newState);
          else if (options.serializer) value = options.serializer(newState);
          else value = JSON.stringify(newState);
        else value = JSON.stringify(newState);

        localStorage.setItem(key, value);
        setState(deserializer(value));
      } catch (error) {
        console.error(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [key, state, setState]
  );

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch (error) {
      console.error(`Error removing localStorage key “${key}”:`, error);
    }
  }, [key, setState]);

  return [state, set, remove];
};

export default useLocalStorage;
*/
import { useCallback, useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  if (!key) throw new Error("useLocalStorage key may not be falsy");

  const readValue = useCallback(() => {
    if (typeof window === "undefined") return initialValue;
    let storedValue;
    try {
      storedValue = window.localStorage.getItem(key);
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
    }
    return storedValue ? JSON.parse(storedValue) : initialValue;
  }, [key]);

  const [value, setValue] = useState(readValue);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
