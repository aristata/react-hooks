import { useState } from "react";

const UseStatePage = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem((prev) => prev + 1);
  const decrementItem = () => setItem((prev) => prev - 1);
  return (
    <div>
      <h1>안녕하세요. useState 테스트 페이지 입니다</h1>
      <p>현재 state 는 {item} 입니다</p>
      <p>state 를 변화시키고 싶다면, 아래 버튼을 클릭 해주세요</p>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

export default UseStatePage;
