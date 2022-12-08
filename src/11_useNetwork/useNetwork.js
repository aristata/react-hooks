import { useEffect, useState } from "react";

export const useNetwork = (onChange) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const netWorkChangeHandler = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", netWorkChangeHandler);
    window.addEventListener("offline", netWorkChangeHandler);
    return () => {
      window.removeEventListener("online", netWorkChangeHandler);
      window.removeEventListener("offline", netWorkChangeHandler);
    };
  }, [onChange]);

  return isOnline;
};
