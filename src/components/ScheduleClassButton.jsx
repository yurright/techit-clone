import { useState } from "react";

const ScheduleClassButon = ({
  name,
  comp,
  classCardComp,
  setClassCardComp,
}) => {
  const [isClick, setIsClick] = useState(false);

  const onClickToggle = () => {
    if (isClick) {
      setIsClick(false);
      const temp = classCardComp.filter((v, i) => {
        return v !== comp;
      });

      setClassCardComp(temp);
    } else {
      setIsClick(true);
      setClassCardComp([...classCardComp, comp]);
    }
  };

  return (
    <li
      onClick={onClickToggle}
      className={`py-2 px-3 border rounded-md ${
        isClick && "border-techit-main text-techit-main bg-[#fff7ed]"
      }`}
    >
      {name}
    </li>
  );
};

export default ScheduleClassButon;
