import { useState } from "react";

const useTab = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentTab: allTabs[currentIndex],
    changeTab: (index) => setCurrentIndex((prev) => index)
  };
};

export default useTab;
