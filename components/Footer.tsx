import { footerData } from "@/data/footerData";
import { Li } from "./ui/li";
import { P } from "./ui/p";

const Footer = () => {
  return (
    <div className="border bg-white py-10 shadow-2xl dark:bg-black">
      <ul className="container flex justify-between">
        {footerData.map((item) => {
          return (
            <Li key={item.title} className="space-y-2">
              <P className="text-base font-bold uppercase">{item.title}</P>
              <ul className="space-y-2">
                {item.links.map((subItem) => (
                  <Li
                    className="cursor-pointer transition-colors duration-150 dark:text-slate-600 dark:hover:text-white"
                    key={subItem.name}
                  >
                    {subItem.name}{" "}
                  </Li>
                ))}
              </ul>
            </Li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
