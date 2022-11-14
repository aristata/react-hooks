import { UseInput } from "./UseInput";

export const UseInputSample = () => {
  const nameInput = UseInput("Mr. ");
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...nameInput}></input>
    </div>
  );
};
