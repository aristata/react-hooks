import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    let isPass = true;
    if (typeof validator === "function") {
      isPass = validator(event.target.value);
    }
    if (isPass) {
      setValue((prev) => event.target.value);
    }
  };
  return { value, onChange };
};
