import { useInput } from "./UseInput";

export const UseInputSample = () => {
  const validator = (value) => {
    return !value.includes("@");
  };
  const nameInput = useInput("Mr. ", validator);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...nameInput}></input>
    </div>
  );
};
