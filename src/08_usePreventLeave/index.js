import { usePreventLeave } from "./UsePreventLeave"

const UsePreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave()
  return (
    <div>
      <button onClick={enablePrevent}>닫기 방지</button>
      <button onClick={disablePrevent}>닫기 방지 해제</button>
    </div>
  )
}

export default UsePreventLeave
