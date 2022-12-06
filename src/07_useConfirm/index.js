import useConfirm from "./UseConfirm"

const UseConfirmSample = () => {
  const deleteWorld = () => {
    console.log("삭제 합니다")
  }
  const cancel = () => {
    console.log("취소 하였습니다")
  }
  const confirmDelete = useConfirm("확실해요?", deleteWorld, cancel)
  return (
    <div>
      <button onClick={confirmDelete}>삭제</button>
    </div>
  )
}

export default UseConfirmSample
