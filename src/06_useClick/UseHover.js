import { useEffect, useRef } from "react"

const UseHover = (onHoverFunction) => {
  const element = useRef()
  useEffect(() => {
    if (typeof onHoverFunction !== "function") {
      return undefined
    }
    if (element.current) {
      element.current.addEventListener("mouseenter", onHoverFunction)
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHoverFunction)
      }
    }
  }, [])
  return element
}

export default UseHover
