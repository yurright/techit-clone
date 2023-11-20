import { useState } from "react";
import ScheduleClassButton from "./ScheduleClassButton";
import ScheduleClassCard from "./ScheduleClassCard";

const classData = [
  {
    name: "프론트엔드",
    comp: (
      <ScheduleClassCard
        title="프론트엔드"
        desc="기초가 탄탄한 개발자로 성장"
        image="kdt_frontend"
        bgColor="bg-[#e5f4ff]"
      />
    ),
  },
  {
    name: "백엔드 : Java",
    comp: (
      <ScheduleClassCard
        title="백엔드 : Java"
        desc="Java부터 Spring까지"
        image="kdt_backend_java"
        bgColor="bg-[#ebf7eb]"
      />
    ),
  },
  {
    name: "백엔드 : Python",
    comp: (
      <ScheduleClassCard
        title="백엔드 : Python"
        desc="파이썬으로 배우는 백엔드"
        image="kdt_backend_python"
        bgColor="bg-[#ebf7eb]"
      />
    ),
  },
  {
    name: "앱스쿨 : iOS",
    comp: (
      <ScheduleClassCard
        title="앱스쿨 : iOS"
        desc="실무에 가장 가까운 iOS학습"
        image="kdt_ios"
        bgColor="bg-[#e9e5ff]"
      />
    ),
  },
  {
    name: "AI 스쿨",
    comp: (
      <ScheduleClassCard
        title="AI 스쿨"
        desc="AI 역량을 위한 실습 교육"
        image="kdt_ai"
        bgColor="bg-[#e5f4ff]"
      />
    ),
  },
  {
    name: "앱스쿨 : Android",
    comp: (
      <ScheduleClassCard
        title="앱스쿨 : Android"
        desc="기본기와 프로젝트 경험을 함께"
        image="kdt_android"
        bgColor="bg-[#e9e5ff]"
      />
    ),
  },
  {
    name: "데이터 분석",
    comp: (
      <ScheduleClassCard
        title="데이터 분석"
        desc="데이터 분석가로의 탄탄한 시작점"
        image="kdt_data"
        bgColor="bg-[#e5f4ff]"
      />
    ),
  },
  {
    name: "디자인",
    comp: (
      <ScheduleClassCard
        title="디자인"
        desc="경쟁력있는 커리어의 시작"
        image="kdt_design"
        bgColor="bg-[#fce8e6]"
      />
    ),
  },
  {
    name: "블록체인",
    comp: (
      <ScheduleClassCard
        title="블록체인"
        desc="국내 유일 KDT 블록체인 과정"
        image="kdt_blockchain"
        bgColor="bg-[#f7e3fc]"
      />
    ),
  },
  {
    name: "스타트업 스테이션",
    comp: (
      <ScheduleClassCard
        title="스타트업 스테이션"
        desc="IT 창업 시작을 위한 첫 스텝"
        image="kdt_blockchain"
        bgColor="bg-[#f7e3fc]"
      />
    ),
  },
  {
    name: "프론트엔드 심화",
    comp: (
      <ScheduleClassCard
        title="프론트엔드 심화"
        desc="프론트엔드 한끗 성장을 위해"
        image="kdt_frontend_plus"
        bgColor="bg-[#e5f4ff]"
      />
    ),
  },
  {
    name: "백엔드 심화",
    comp: (
      <ScheduleClassCard
        title="백엔드 심화"
        desc="IT 창업 시작을 위한 첫 스텝"
        image="kdt_backend_plus"
        bgColor="bg-[#ebf7eb]"
      />
    ),
  },
];

const ScheduleClass = () => {
  const [classCardComp, setClassCardComp] = useState([]);

  return (
    <div>
      <div className="mb-10 text-xl font-semibold">
        {" "}
        관심 있는 클래스를 선택해주세요.
      </div>
      <ul className="p-6 border rounded-xl flex flex-wrap gap-3">
        {classData.map((v, i) => (
          <ScheduleClassButton
            key={i}
            name={v.name}
            comp={v.comp}
            classCardComp={classCardComp}
            setClassCardComp={setClassCardComp}
          />
        ))}
      </ul>
      <ul className="grid grid-cols-2 gap-6 mt-6">
        {classCardComp.map((v, i) => (
          <li className="rounded-xl border " key={i}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleClass;
