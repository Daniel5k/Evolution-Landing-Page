import { MdDirectionsCarFilled } from "react-icons/md";

const FloatingDetails = () => {
  return (
    <div className="absolute  grid grid-flow-row grid-rows-4 gap-4 md:grid-flow-col md:grid-cols-4 md:grid-rows-1 md:bottom-3 md:-right-20">
      <div className="backdrop-blur-sm bg-white/70 p-3 rounded-md">
        <MdDirectionsCarFilled
          className="mb-2 rounded text-lg"
          color="#299D90"
        />
        <p className="font-[600] text-sm">350 km/h</p>
        <p className="text-[12px]">Top Spped</p>
      </div>
      <div className="backdrop-blur-sm bg-white/70 p-3 rounded-md">
        <MdDirectionsCarFilled
          className="mb-2 rounded text-lg"
          color="#299D90"
        />
        <p className="font-[600] text-sm">500 km</p>
        <p className="text-[12px]">Range</p>
      </div>
      <div className="backdrop-blur-sm bg-white/70 p-3 rounded-md">
        <MdDirectionsCarFilled
          className="mb-2 rounded text-lg"
          color="#299D90"
        />
        <p className="font-[600] text-sm">30 min</p>
        <p className="text-[12px]">Fast Charge</p>
      </div>
    </div>
  );
};

export default FloatingDetails;
