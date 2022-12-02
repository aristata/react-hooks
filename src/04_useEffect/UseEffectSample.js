import { useEffect, useState } from "react"

const App = () => {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    useEffect(() => {
        console.log("안녕하세요. useEffect 가 실행되었습니다")
        console.log("이 함수는 number1 스테이트가 변화할 때에만 동작합니다")
    }, [number1])
    return (
        <div className="App">
            <div>Hi</div>
            <button onClick={() => setNumber1((prev) => prev + 1)}>
                {number1}
            </button>
            <button onClick={() => setNumber2((prev) => prev + 1)}>
                {number2}
            </button>
        </div>
    )
}

export default App
