import { footerData } from "@/data/footerData";
import { Li } from "./ui/li";
import { P } from "./ui/p";
import { GiWorld } from "react-icons/gi";
import { DiamondPercent, Facebook, Globe, Instagram, Linkedin, Twitter } from "lucide-react";

const footerContent = [
  { title: "about zsurvey", links: "", description: "what we do and who we are " },
  { title: "services", links: "", description: "what we offer and how we can help you grow" },
  { title: "contact", links: "", description: "get in touch with us for more information" },
];

const footerBottom = [
  { title: "privacy policy", links: [] },
  { title: "terms", links: [] },
  { title: `copyright © ${new Date().getFullYear()} ZettaStack systems`, links: [] },
];

const footerSocialIcons = [
  { title: "facebook", icon: <Facebook size={16} /> },
  { title: "twitter", icon: <Twitter size={16} /> },
  { title: "linkedin", icon: <Linkedin size={16} /> },
  { title: "instagram", icon: <Instagram size={16} /> },
];

const Footer = () => {
  return (
    <footer className="bg-[#003161]">
      <div className="container py-5 flex justify-between gap-x-4">
        <div className="flex gap-x-2 items-center">
          <DiamondPercent size={30} className="text-white 
          bg-[linear-gradient(108.7deg,rgba(221,22,224,1)11%,rgba(111,22,190,1)88.2%)] rounded-full p-1" />
          <span className="text-white text-xl font-semibold">Zsurvey</span>
        </div>
        {footerContent.map((item) => (
          <div key={item.title} className="space-y-2 hover:bg-slate-600/50 transition-colors duration-300 ease-in-out  rounded-md py-4 px-3 cursor-pointer">
            <P className="text-white capitalize">{item.title}</P>
            <P className="text-white text-xs capitalize">{item.description}</P>
          </div>
        ))}
      </div>
      <div className="px-4 w-full">
        <span className="w-full block border-b border-white"></span>
      </div>
      <div className="flex justify-between items-center container">
        <ul className="flex gap-x-6 [&>li]:cursor-pointer items-center text-xs">
          <Li className="py-6 flex items-center gap-x-2 pr-8">
            <Globe size={18} className="text-white" />
            <P className="text-white text-sm capitalize">English</P>
          </Li>
          {footerBottom.map((item) => (
            <Li key={item.title} className="py-6 tracking-wide">
              <P className="text-white text-xs capitalize">{item.title}</P>
            </Li>
          ))}
        </ul>
        <ul className="flex gap-x-4">
          {footerSocialIcons.map((item) => (
            <Li key={item.title} className="!text-white border-2 border-white cursor-pointer rounded-full p-2 transition-all duration-300 ease-in-out  hover:bg-[linear-gradient(108.7deg,rgba(221,22,224,1)11%,rgba(111,22,190,1)88.2%)] hover:text-black">
              {item.icon}
            </Li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
