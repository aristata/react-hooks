import { useRef } from "react"

const UseRefSample = () => {
  const potato = useRef()
  setTimeout(() => potato.current.focus(), 3000)
  return (
    <div>
      <div>Hi</div>
      <input ref={potato} placeholder="여기에 포커싱 해보세요" />
    </div>
  )
}

export default UseRefSample
