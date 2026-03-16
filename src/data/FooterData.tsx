import { HiOutlineBookOpen } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineChatBubbleOvalLeft,
} from "react-icons/hi2";

const footerData = [
  {
    id: 1,
    image: <HiOutlineBookOpen className="text-lg" />,
    description: "30K Knowledge tokens",
  },
  {
    id: 2,
    image: <FaEnvelope className="text-lg" />,
    description: "10K message tokens",
  },
  {
    id: 3,
    image: <HiOutlinePhone className="text-lg" />,
    description: "5 knowledge items",
  },
  {
    id: 4,
    image: <HiOutlineChatBubbleBottomCenterText className="text-lg" />,
    description: "10 call minutes",
  },
  {
    id: 5,
    image: <HiOutlineChatBubbleOvalLeft className="text-lg" />,
    description: "No comments replies",
  },
];

export default footerData;
