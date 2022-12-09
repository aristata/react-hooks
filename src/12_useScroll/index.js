import { useScroll } from "./useScroll"

const UseScrollSample = () => {
  const { y } = useScroll()
  return (
    <div style={{
      height: "1000vh"
    }}>
      <h1 style={{
        position: "fixed", color: y > 100 ? "red" : "blue"
      }}>Just act normal</h1>
    </div>
  )
}

export default UseScrollSample
