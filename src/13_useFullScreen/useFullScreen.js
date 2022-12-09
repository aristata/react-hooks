import { useRef } from "react"

export const useFullScreen = (callbackFunction) => {
  const element = useRef()
  const runCallbackFunction = (isFull) => {
    if (callbackFunction && typeof callbackFunction === "function") {
      callbackFunction(isFull)
    }
  }
  const fullScreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen()
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen()
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen()
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen()
      }
      runCallbackFunction(true)
    }
  }
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
    runCallbackFunction(false)
  }
  return { element, fullScreen, exitFullScreen }
}
