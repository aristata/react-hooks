import useTab from "./UseTabs";

const tabs = [
  {
    tab: "Section 1",
    content: "섹션 1 입니다"
  },
  {
    tab: "Section 2",
    content: "섹션 2 입니다"
  },
  {
    tab: "Section 3",
    content: "섹션 3 입니다"
  }
];

const UseTabsSample = () => {
  const { currentTab, changeTab } = useTab(0, tabs);
  const onClickButtonHandler = (index) => {
    changeTab(index);
  };
  return (
    <div>
      {tabs.map((item, index) => (
        <button key={index} onClick={() => onClickButtonHandler(index)}>
          {item.tab}
        </button>
      ))}
      <div>{currentTab.content}</div>
    </div>
  );
};

export default UseTabsSample;
