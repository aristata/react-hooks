import { useFadeIn } from "./useFadeIn";

export const UseFadeInSample = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(2, 3);
  return (
    <div>
      <h1 {...fadeInH1}>안녕하세요. 이 제목은 페이드 인 될 것입니다</h1>
      <p {...fadeInP}>이 내용도 페이드 인 될 것입니다</p>
    </div>
  );
};
