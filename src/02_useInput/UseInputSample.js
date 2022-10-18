import { UseInput } from "./UseInput";

export const UseInputSample = () => {
  const name = UseInput("Mr. ");
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name}></input>
    </div>
  );
};
