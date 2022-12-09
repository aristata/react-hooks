import { useFullScreen } from "./useFullScreen"
import { useState } from "react"

const UseFullScreenSample = () => {
  const [isFull, setIsFull] = useState(false)
  const callbackFunction = (isFull) => {
    console.log(isFull ? "전체 화면 입니다" : "전체 화면이 아닙니다")
    setIsFull(isFull)
  }
  const { element, fullScreen, exitFullScreen } = useFullScreen(callbackFunction)
  return (
    <div ref={element}>
      <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
      <button disabled={!isFull} onClick={exitFullScreen}>전체 화면 종료</button>
      <button disabled={isFull} onClick={fullScreen}>전체 화면</button>
    </div>
  )
}

export default UseFullScreenSample
