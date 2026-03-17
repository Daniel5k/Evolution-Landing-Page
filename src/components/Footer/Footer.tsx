import { FaBoltLightning } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#264653] text-[12px] px-4 py-6 grid grid-flow-row grid-rows-6 gap-4 text-center md:grid-flow-col md:grid-cols-4 md:grid-rows-3 md:text-left text-white">
      <div className="flex flex-col">
        <div className="flex items-center justify-center mb-4 md:justify-start">
          <FaBoltLightning color="#299D90" />
          <h2 className="text-xl font-[500]">EVolution</h2>
        </div>
        <p>
          Leading the evolution of electric mobility with innovative solutions
          and sustainable transportation
        </p>
      </div>
      <div className="grid md:col-start-2">
        <h4 className="text-xl mb-4">Quick Links</h4>
        <p>About Us</p>
        <p>Our Vehicles</p>
        <p>Services</p>
        <p>Contact</p>
      </div>
      <div className="grid md:col-start-3">
        <h4 className="text-xl mb-4">Contact</h4>
        <p>123 EV Street</p>
        <p>New York, NY 1000I</p>
        <p>contact@evolution.com</p>
        <p>+1(556)123-4567</p>
      </div>

      <div className="grid md:col-start-4">
        <h4 className="text-xl mb-4">Newletter</h4>
        <p>Subscribe to our newletter for the latest EV news and updates.</p>
        <input
          type="text"
          placeholder="Your email"
          className="mt-4 border border-6 border-[#299D90] text-white rounded-md py-1 px-2 text-[12px]"
        />
      </div>
      <hr className="opacity-20 mt-6 grid md:col-start md:row-start-2 md:col-span-4 " />
      <div className="grid md:row-start-3 md:-mt-20">
        <p>2024 EVolution. All rights reserved</p>
      </div>
      <div className="text-xl md:row-start-3 md:col-start-4 md:-mt-20">
        <div className="flex flex-row gap-2 justify-center md:justify-end">
          <MdFacebook color="white" />
          <FaTwitter color="white" />
          <FaInstagram color="white" />
          <FaLinkedin color="white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
