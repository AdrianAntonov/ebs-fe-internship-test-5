import { useEffect, useState } from "react";

export function useDebounceValue(value, time) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceValue(value);
    }, time);
    return () => clearTimeout(id);
  }, [time, value]);

  return debounceValue;
}
