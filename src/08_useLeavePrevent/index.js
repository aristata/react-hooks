import { useLeavePrevent } from "./UseLeavePrevent"

const UseLeavePrevent = () => {
  const { enablePrevent, disablePrevent } = useLeavePrevent()
  return (
    <div>
      <button onClick={enablePrevent}>닫기 방지</button>
      <button onClick={disablePrevent}>닫기 방지 해제</button>
    </div>
  )
}

export default UseLeavePrevent
