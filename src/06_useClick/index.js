import useClick from "./UseClick"

const UseClickSample = () => {
  const sayHello = () => {
    console.log("say hello!")
  }
  const hi = useClick(sayHello)
  
  return (
    <div>
      <h1 ref={hi}>Hi</h1>
    </div>
  )
}
export default UseClickSample
