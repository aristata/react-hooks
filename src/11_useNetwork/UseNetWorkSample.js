import { useNetwork } from "./useNetwork";

export const UseNetWorkSample = () => {
  const onlineLog = (status) => {
    if (status) {
      console.log("당신의 네트워크는 온라인 상태 입니다");
    } else {
      console.log("당신의 네트워크는 오프라인 상태 입니다");
    }
  };
  const isOnline = useNetwork(onlineLog);
  return <div>{isOnline ? "Online" : "Offline"}</div>;
};
