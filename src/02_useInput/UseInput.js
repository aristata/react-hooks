import { useState } from "react";

export const UseInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue((prev) => event.target.value);
  };
  return { value, onChange };
};
