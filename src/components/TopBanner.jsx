import { useEffect, useState } from "react";
import Closeicon from "../icons/Closeicon";

const TopBanner = () => {
  const [isClosed, setIsClosed] = useState(false);

  const onClickClose = () => {
    setIsClosed(true);

    localStorage.setItem("topBannerClosed", "true");
  };

  useEffect(() => {
    if (localStorage.getItem("topBannerClosed") === "true") {
      setIsClosed(true); // 한번만 광고 뜨면 새로고침해도 안 뜨도록
    }
  }, []);

  return (
    <div className={`h-[42px] bg-purple-100 ${isClosed && "hidden"}`}>
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between">
        <div className="flex items-center">
          <span className="font-semibold">
            앱 스쿨 사전설명회로 궁금증 해결하기
          </span>
          <img
            className="w-[52px]"
            src="./images/top_banner.webp"
            alt="top_banner"
          />
        </div>
        <button onClick={onClickClose} className="w-5">
          <Closeicon />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
