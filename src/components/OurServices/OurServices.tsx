import { FaBoltLightning } from "react-icons/fa6";

const OurServices = () => {
  return (
    <div className="px-4 py-10 grid grid-flow-row grid-rows-2 md:grid-rows-1 md:grid-flow-col md:grid-cols-2 bg-[#E0E0E0] gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-xl">Our Services</h2>
        <p className="text-[14px]">
          We provide comprehensive services to ensure your electric vehicle
          experience is seamless and enjoyable
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <FaBoltLightning color="#299D90" />
            <p className="text-sm font-[400]">Professional EV consultaion</p>
          </div>
          <div className="flex gap-2">
            <FaBoltLightning color="#299D90" />
            <p className="text-sm font-[400]">Home changing installation</p>
          </div>
          <div className="flex gap-2">
            <FaBoltLightning color="#299D90" />
            <p className="text-sm font-[400]">Regular maintenance service</p>
          </div>
          <div className="flex gap-2">
            <FaBoltLightning color="#299D90" />
            <p className="text-sm font-[400]">24/7 roadside assistance</p>
          </div>
          <div className="flex gap-2">
            <FaBoltLightning color="#299D90" />
            <p className="text-sm font-[400]">Battery health monitoring</p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white p-4 rounded-md flex flex-col gap-6">
          <h3 className="font-bold">Book a Service</h3>
          <input
            className="border border-6 border-[#299D90] rounded-md py-1 px-2 text-[12px]"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="border border-6 border-[#299D90] rounded-md py-1 px-2 text-[12px]"
            type="text"
            placeholder="Email Address"
          />
          <select
            name=""
            id=""
            className="border border-6 bg-[#E0E0E0] rounded-md py-1 px-2 text-[12px]"
          >
            <option value="Select Service Type">Select Service Type</option>
          </select>

          <input
            value={"Book Now"}
            type="button"
            className="border border-6 bg-[#299D90] text-white rounded-md py-1 px-2 text-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
