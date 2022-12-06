import { useBeforeLeave } from "./useBeforeLeave"

const UseBeforeLeaveSample = () => {
  const onBefore = () => {
    alert("떠나지 말아요 ㅠㅠ")
  }
  useBeforeLeave(onBefore)
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default UseBeforeLeaveSample
