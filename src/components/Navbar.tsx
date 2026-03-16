import { FaBoltLightning } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-4 text-nowrap px-4">
      <div className="flex justify-start gap-2 text-[10px] items-center ">
        <div className="flex">
          <FaBoltLightning size={15} color="#299D90" />
          <h1 className="text-nowrap text-sm text-[#299D90] text-">
            EVolution
          </h1>
        </div>
        <p>Home</p>
        <p>Vehicles</p>
        <p>Charging</p>
        <p>Services</p>
        <p>About</p>
      </div>
      <div className="hidden md:flex justify-between gap-4 text-[12px] items-center">
        <input
          className="rounded-xl border border-2-black px-2 py-1"
          type="text"
          placeholder="Search vehicles.."
        />
        <p className="flex text-[10px]">
          <HiOutlineGlobeAlt size={15} className="mr-1" />
          EN
        </p>
        <button className="flex gap-1 rounded-xl border border-[#299D90] px-2 py-1">
          <HiOutlineUser
            color="white"
            size={15}
            className="bg-[#299D90] rounded-full p-1"
          />
          <p className="text-[#299D90]">Sign in</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
