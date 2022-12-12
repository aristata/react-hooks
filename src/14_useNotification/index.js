import { useNotification } from "./useNotification"

const UseNotificationSample = () => {
  const sendNotification = useNotification("본좌가 명한다", { body: "라고 전파하랍신다" })
  
  return (
    <div>
      <button onClick={sendNotification}>알림 전송</button>
    </div>
  )
}

export default UseNotificationSample
