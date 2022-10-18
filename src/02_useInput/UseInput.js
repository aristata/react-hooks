import { useState } from "react";

export const UseInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return { value };
};
