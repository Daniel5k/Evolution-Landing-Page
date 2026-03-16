import { FaCalendarDay } from "react-icons/fa";
import {
  MdAttachMoney,
  MdDirectionsCarFilled,
  MdEvStation,
} from "react-icons/md";

const Card = () => {
  return (
    <div className="grid grid-flow-row grid-rows-4 gap-4 md:grid-flow-col md:grid-cols-4 md:grid-rows-1">
      <div className="bg-white p-3 rounded-md">
        <MdDirectionsCarFilled
          className="mb-2 rounded text-lg"
          color="#299D90"
        />
        <p className="font-[600] text-sm">Vehicle Comparison</p>
        <p className="text-[12px]">Compare different EV models</p>
      </div>
      <div className="bg-white p-3 rounded-md">
        <MdEvStation className="mb-2 rounded text-lg" color="#299D90" />
        <p className="font-[600] text-sm">Charging Network</p>
        <p className="text-[12px]">First charging stations nearby</p>
      </div>
      <div className="bg-white p-3 rounded-md">
        <FaCalendarDay className="mb-2 rounded text-lg" color="#299D90" />
        <p className="font-[600] text-sm">Test Drive</p>
        <p className="text-[12px]">Book a test drive today</p>
      </div>
      <div className="bg-white p-3 rounded-md">
        <MdAttachMoney
          className="mb-2 bg-[#299D90] rounded-full text-lg"
          color="#f9f9f9"
        />
        <p className="font-[600] text-sm">EV Calculator</p>
        <p className="text-[12px]">Calculate your savings</p>
      </div>
    </div>
  );
};

export default Card;
