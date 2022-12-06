const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") {
    return
  }
  
  if (onCancel && typeof onCancel !== "function") {
    return
  }
  
  return () => {
    if (window.confirm(message)) {
      onConfirm()
    } else {
      try {
        onCancel()
      } catch (e) {
        console.error("onCancel 함수가 정의되지 않았습니다")
      }
    }
  }
}
export default useConfirm
