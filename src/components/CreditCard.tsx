import { FaCcVisa } from "react-icons/fa";
import { MdOutlineContactless } from "react-icons/md";
const CreditCard = () => {
  const cardNumber: string = "34554562771035807";
  return (
    <div className="w-full text-white min-h-screen flex justify-center items-center">
      <div className="text-white gap-[200px] bg-gradient-to-b to-[#2D69FF] from-[#2C69FF] px-4 py-[20px] rounded-[20px] justify-center items-center w-[328px] h-[208px]">
        <div className="flex flex-col">
          <div className="flex justify-between mb-16">
            <MdOutlineContactless className="text-white text-3xl" />
            <FaCcVisa className="text-white text-3xl" />
          </div>
          <p className="text-2xl flex gap-2 mb-3">
            <span>{cardNumber.slice(0, 4)}</span>
            <span>{cardNumber.slice(4, 9)}</span>
            <span>{cardNumber.slice(9, 13)}</span>
            <span>{cardNumber.slice(13)}</span>
          </p>
        </div>
        <div className="flex justify-start gap-10">
          <div className="flex flex-col">
            <p className="text-[8px]">Card holder name</p>
            <p className="text-[12px]">John Carter</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[8px]">Card holder name</p>
            <p className="text-[12px]">02/30</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[8px]">Card holder name</p>
            <p className="text-[12px]">John Carter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
