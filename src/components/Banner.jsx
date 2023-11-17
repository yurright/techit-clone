import Slider from "react-slick";
import BannerCard from "./BannerCard";
import { useEffect, useRef, useState } from "react";
import NextIcon from "../icons/NextIcon";
import PrevIcon from "../icons/PrevIcon";

const bannerData = [
  {
    title: "TECHIT IT 직무 부트캠프 사전알림",
    desc: "알림 소식 받고, 부트캠프 소식 놓치지 않기!",
    image: "banner_1",
  },
  {
    title: "TECHIT 카카오톡 채널 추가 이벤트",
    desc: "개발자 성장에 필요한 모든 것이 담긴 시크릿 페이지 제공",
    image: "banner_2",
  },
  {
    title: "앱 스쿨 : Android 2기",
    desc: "탄탄한 기본기와 프로젝트 경험을 갖춘 온리원 앱 개발자로 가는 길",
    image: "banner_3",
  },
  {
    title: "TECHIT 온보딩 트랙",
    desc: "수강료 0원 & 취준생, 직장인 누구나 수강 가능한 기초 과정!",
    image: "banner_4",
  },
  {
    title: "DX 교육의 모든 솔루션, 기업 해커톤",
    desc: "상담 신청하고, 테킷 기업 교육을 경험해 보세요!",
    image: "banner_5",
  },
];

const Banner = () => {
  const sliderRef = useRef();
  const [page, setPage] = useState(1);

  const onClickNext = () => {
    sliderRef.current.slickNext();
  };

  const onClickPrev = () => {
    sliderRef.current.slickPrev();
  };

  const getCurrentPage = () => {
    setPage(sliderRef.current.innerSlider.state.currentSlide);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getCurrentPage();
    }, 1000);

    return () => clearInterval(timer); //clear함수 // 의존성 배열 있을 때 timer 중복되는 걸 막기 위해 이전 interval을 클리어해주는 클리어함수임. 계속 인터벌 하나만 실행되도록.
  }, []);

  return (
    <div className="relative">
      <ul>
        <Slider
          ref={sliderRef}
          arrows={false}
          autoplay={true}
          autoplaySpeed={1000}
        >
          {bannerData.map((v, i) => (
            <BannerCard key={i} title={v.title} desc={v.desc} image={v.image} />
          ))}
        </Slider>
      </ul>
      <div className=" absolute w-[1280px] px-6 left-1/2 -translate-x-1/2 bottom-6">
        <div className="text-white bg-black w-fit bg-opacity-30 flex py-[5px] rounded-full text-xs gap-2 px-3">
          <div className="w-4">
            {page + 1}/{bannerData.length}
          </div>
          <button onClick={onClickPrev}>
            <PrevIcon />
          </button>
          <button onClick={onClickNext}>
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
