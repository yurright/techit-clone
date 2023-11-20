import KdtCard from "./KdtCard";
import TitleBar from "./TitleBar";

const KdtSection = () => {
  return (
    <section className="mt-20 bg-yellow-100 container">
      <TitleBar title="KDT 테킷 스쿨" desc="K-Digital Training 부트캠프" />
      <div className="bg-blue-100 grid grid-cols-4 gap-6 justify-items-center mt-10">
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
        <KdtCard />
      </div>
    </section>
  );
};

export default KdtSection;
