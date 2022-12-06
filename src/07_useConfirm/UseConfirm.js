const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return
  }
  
  if (onCancel && typeof onCancel !== "function") {
    return
  }
  
  return () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(message)) {
      onConfirm()
    } else {
      onCancel()
    }
  }
}
export default useConfirm
