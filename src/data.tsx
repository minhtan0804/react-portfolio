import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import Images from "./assets/images";

export const cards = [
  {
    icon: <FaAward className="card_icon" />,
    title: "Experience",
    description: "3+ Years Working",
  },
  {
    icon: <FiUsers className="card_icon" />,
    title: "Clients",
    description: "200+ worldwide",
  },
  {
    icon: <VscFolderLibrary className="card_icon" />,
    title: "Projects",
    description: "80+ Completed",
  },
];

export const clients = [
  {
    id: 1,
    image: Images.client.AVATAR1,
    name: "Ernest Achiever",
    review:
      "As of my knowledge cutoff date in September 2021, the MacBook M2 had not yet been announced by Apple, so it is not possible to provide a review of the product at this time. However, Apple typically releases new products in the fall, so it is possible that the MacBook M2 may be announced later this year or in the future. When more information becomes available, it will be possible to provide a more informed review of the product.",
  },
  {
    id: 2,
    image: Images.client.AVATAR2,
    name: "Harry Margie",
    review:
      "As of my knowledge cutoff date in September 2021, the MacBook M2 had not yet been announced by Apple, so it is not possible to provide a review of the product at this time. However, Apple typically releases new products in the fall, so it is possible that the MacBook M2 may be announced later this year or in the future. When more information becomes available, it will be possible to provide a more informed review of the product.",
  },
  {
    id: 3,
    image: Images.client.AVATAR3,
    name: "Emma Watson",
    review:
      "As of my knowledge cutoff date in September 2021, the MacBook M2 had not yet been announced by Apple, so it is not possible to provide a review of the product at this time. However, Apple typically releases new products in the fall, so it is possible that the MacBook M2 may be announced later this year or in the future. When more information becomes available, it will be possible to provide a more informed review of the product.",
  },
  {
    id: 4,
    image: Images.client.AVATAR4,
    name: "David John",
    review:
      "As of my knowledge cutoff date in September 2021, the MacBook M2 had not yet been announced by Apple, so it is not possible to provide a review of the product at this time. However, Apple typically releases new products in the fall, so it is possible that the MacBook M2 may be announced later this year or in the future. When more information becomes available, it will be possible to provide a more informed review of the product.",
  },
];

export const contactOptions = [
  {
    id: 1,
    title: "Email",
    details: "minhtan290902@gmail.com",
    href: "mailto:minhtan290902@gmail.com",
    action: "Send a message",
    icon: <MdOutlineMail className="option-icon" />,
  },
  {
    id: 2,
    title: "Messenger",
    details: "minhtantutorials",
    href: "https://m.me/minhtan0804",
    action: "Send a message",
    icon: <RiMessengerLine className="option-icon" />,
  },
  {
    id: 3,
    title: "Whats App",
    details: "+84 889 547 725",
    href: "https://api.whatsapp.com/send?phone+1234567890",
    action: "Send a message",
    icon: <BsWhatsapp className="option-icon" />,
  },
];
