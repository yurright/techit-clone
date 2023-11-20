import Banner from "./components/Banner";
import Header from "./components/Header";
import KdtSection from "./components/KdtSection";
import ScheduleSection from "./components/ScheduleSection";
import TopBanner from "./components/TopBanner";

const App = () => {
  return (
    <div className="font-pretendard text-techit-gray-300">
      <TopBanner />
      <Header />
      <Banner />
      <KdtSection />
      <ScheduleSection />
      <div className=" mt-20 bg-yellow-100 h-[206px]">Alarm banner</div>
      <section className="mt-20 bg-yellow-100 container">
        <div className="bg-green-100 h-[64.5px]">Onboarding</div>
        <div className="bg-blue-100 grid grid-cols-3 gap-6 justify-items-center">
          <div className="bg-purple-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-purple-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-purple-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-purple-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-purple-100 w-[397px] h-[316px]">Card</div>
        </div>
      </section>
      <section className="mt-20 bg-yellow-100 container">
        <div className="bg-green-100 h-[64.5px]">Education</div>
        <div className="bg-blue-100 grid grid-cols-2 gap-6 justify-items-center">
          <div className="bg-purple-100 w-[604px] h-[310px]">Card</div>
          <div className="bg-purple-100 w-[604px] h-[310px]">Card</div>
          <div className="bg-purple-100 w-[604px] h-[310px]">Card</div>
        </div>
      </section>
      <footer className="mt-40 max-w-screen-xl mx-auto bg-gray-100 h-[418px]">
        footer
      </footer>
    </div>
  );
};

export default App;
