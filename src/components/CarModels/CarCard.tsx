import cardImage from "../CarModels/images/11fe4583713319.5d4499eab721f.jpg";

const CarCard = () => {
  return (
    <div className="grid grid-flow-row grid-rows-3 gap-4 md:grid-flow-col md:grid-cols-3 md:grid-rows-1">
      <div className="bg-white rounded-md overflow-hidden shadow-md">
        <img src={cardImage} className="w-full h-[120px] object-cover" />
        <div className="p-3">
          <h3 className="font-[600] text-sm">Model Elite</h3>
          <div className="mt-3 grid grid-cols-2 grid-flow-row gap-4">
            <p className="text-[12px]">
              Range: <span className="text-[#299D90]">600km</span>
            </p>
            <p className="text-[12px]">
              Speed: <span className="text-[#299D90]">320 km/h</span>
            </p>
            <p className="text-[12px]">
              Price: <span className="text-[#299D90]">$79,900</span>
            </p>
          </div>
          <button className="mt-4 p-1 font-[500] text-[#299D90] rounded-2xl border border-5 border-[#299D90] w-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-white rounded-md overflow-hidden shadow-md">
        <img src={cardImage} className="w-full h-[120px] object-cover" />
        <div className="p-3">
          <h3 className="font-[600] text-sm">Model Elite</h3>
          <div className="mt-3 grid grid-cols-2 grid-flow-row gap-4">
            <p className="text-[12px]">
              Range: <span className="text-[#299D90]">600km</span>
            </p>
            <p className="text-[12px]">
              Speed: <span className="text-[#299D90]">320 km/h</span>
            </p>
            <p className="text-[12px]">
              Price: <span className="text-[#299D90]">$79,900</span>
            </p>
          </div>
          <button className="mt-4 p-1 font-[500] text-[#299D90] rounded-2xl border border-5 border-[#299D90] w-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-white rounded-md overflow-hidden shadow-md">
        <img src={cardImage} className="w-full h-[120px] object-cover" />
        <div className="p-3">
          <h3 className="font-[600] text-sm">Model Elite</h3>
          <div className="mt-3 grid grid-cols-2 grid-flow-row gap-4">
            <p className="text-[12px]">
              Range: <span className="text-[#299D90]">600km</span>
            </p>
            <p className="text-[12px]">
              Speed: <span className="text-[#299D90]">320 km/h</span>
            </p>
            <p className="text-[12px]">
              Price: <span className="text-[#299D90]">$79,900</span>
            </p>
          </div>
          <button className="mt-4 p-1 font-[500] text-[#299D90] rounded-2xl border border-5 border-[#299D90] w-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
