const KdtCard = () => {
  return (
    <div className="bg-purple-100 w-[290px] h-[416px] ">
      <div className="overflow-hidden rounded-lg ">
        <img
          className="hover:scale-110 duration-300   "
          src="./images/kdt_blockchain.webp"
          alt="kdt_blockchain"
        />
      </div>
      <div className="pt-4">
        <span className="text-[#1d4ed8] text-sm font-semibold border border-[#1d4ed8] py-1 px-2 rounded-[4px]">
          모집중
        </span>
        <h3>블록체인스쿨</h3>
        <h5>미래를 바꿀 대체불가능한 개발자의 시작</h5>
        <div>23.08.01(화) ~ 23.09.01(목) 까지</div>
      </div>
    </div>
  );
};

export default KdtCard;
