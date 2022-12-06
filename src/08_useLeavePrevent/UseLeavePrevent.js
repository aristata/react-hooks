export const useLeavePrevent = () => {
  const preventEventHandler = (event) => {
    event.preventDefault()
    event.returnValue = ""
  }
  const enablePrevent = () => {
    window.addEventListener("beforeunload", preventEventHandler)
  }
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", preventEventHandler)
  }
  return { enablePrevent, disablePrevent }
}
