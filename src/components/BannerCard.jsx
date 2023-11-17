const BannerCard = ({ title, desc, image }) => {
  return (
    <div>
      <li className="relative h-[400px]">
        <div className="container  h-full flex flex-col justify-center">
          <h3 className="text-[32px] font-bold ">{title}</h3>
          <h5 className="text-[18px] mt-2">{desc}</h5>
        </div>
        <img
          className="absolute top-0 object-cover -z-10 "
          src={`./images/${image}.webp`}
          alt={image}
        />
      </li>
    </div>
  );
};

export default BannerCard;
