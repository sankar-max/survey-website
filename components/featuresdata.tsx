import { features, featuresfirst, surveySections, surveySectionsfirst } from "@/data/features";
import Image from "next/image"; 
import { H4 } from "./ui/h4";
import { P } from "./ui/p";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function FeaturesData () {
  return (
    <div className="space-y-7 pt-12">
      {surveySections.map((section, index) => (
        <div
          key={index}
          className="grid items-center gap-x-3 gap-y-3 px-6 py-6 md:grid-cols-2"
        >
          <div
            className={
              index % 2 === 0 ? "order-2 space-y-5" : "order-1 space-y-5"
            }
          >
            <H4 className="font-bold">{section.title}</H4>
            {section.subtitle && (
              <P className="font-semibold">{section.subtitle}</P>
            )}
            {section.description && (
              <P className="text-justify">{section.description}</P>
            )}
            {section.items && (
              <ul className="mt-10 list-disc space-y-3 pl-5">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-lg leading-relaxed text-black">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.details &&
              section.details.map((detail, idx) => (
                <div key={idx}>
                  <P className="font-semibold">{detail.label}</P>
                  <P className="text-justify">{detail.text}</P>
                </div>
              ))}
          </div>
          <div
            className={
              index % 2 === 0
                ? "relative order-1 h-96 w-[100%]"
                : "relative order-2 h-96 w-[100%]"
            }
          >
            <Image src={section.imageSrc} alt={section.altText} fill />
          </div>
        </div>
      ))}
      {features.map((feature, index) => (
        <div
          key={index}
          className="grid items-center gap-x-3 gap-y-3 px-6 py-6 md:grid-cols-2"
        >
          <div
            className={
              index % 2 === 0 ? "order-1 space-y-5" : "order-2 space-y-5"
            }
          >
            <H4 className="font-bold">{feature.title}</H4>
            <ul className="mt-10 list-disc space-y-3 pl-5">
              {feature.description.map((desc, descIndex) => (
                <li
                  key={descIndex}
                  className="text-lg leading-relaxed text-black"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={
              index % 2 === 0
                ? "relative order-2 h-96 w-[100%]"
                : "relative order-1 h-96 w-[100%]"
            }
          >
            <Image src={feature.image} alt={feature.title} fill />
          </div>
        </div>
      ))}

      {featuresfirst.map((feature, index) => (
        <div
          key={index}
          className="grid items-center gap-x-3 gap-y-3 px-6 py-6 md:grid-cols-2"
        >
          <div
            className={
              index % 2 === 0 ? "order-2 space-y-5" : "order-1 space-y-5"
            }
          >
            <H4 className="font-bold">{feature.title}</H4>
            <div>
              <ul className="mt-10 list-disc space-y-3 pl-5">
                {feature.description.map((text, idx) => (
                  <li key={idx} className="text-lg leading-relaxed text-black">
                    {text}
                  </li>
                ))}
              </ul>
              {feature.links && (
                <div className="space-y-5 pt-4">
                  {feature.links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="flex gap-x-2">
                      <Image
                        src="/feature/playstore.png"
                        alt="app-icon"
                        width={30}
                        height={20}
                      />
                      <P>{link.label}</P>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div
            className={
              index % 2 === 0
                ? "relative order-1 h-96 w-[100%]"
                : "relative order-2 h-96 w-[100%]"
            }
          >
            <Image src={feature.imageSrc} alt={feature.altText} fill />
          </div>
        </div>
      ))}

      {surveySectionsfirst.map((section, index) => (
        <div
          key={index}
          className="grid items-center gap-x-3 gap-y-3 px-6 py-6 md:grid-cols-2"
        >
          <div
            className={
              index % 2 === 0 ? "order-1 space-y-5" : "order-2 space-y-5"
            }
          >
            <H4 className="font-bold">{section.title}</H4>
            {section.subtitle && (
              <P className="font-semibold">{section.subtitle}</P>
            )}
            {section.description && (
              <P className="text-justify">{section.description}</P>
            )}
            {section.items.length > 0 && (
              <ul className="mt-10 list-disc space-y-3 pl-5">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-lg leading-relaxed text-black">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.details &&
              section.details.map((detail, idx) => (
                <div key={idx}>
                  <P className="font-semibold">{detail.label}</P>
                  <P className="text-justify">{detail.text}</P>
                </div>
              ))}
          </div>
          <div
            className={
              index % 2 === 0
                ? "relative order-2 h-96 w-[100%]"
                : "relative order-1 h-96 w-[100%]"
            }
          >
            <Image src={section.imageSrc} alt={section.altText} fill />
          </div>
        </div>
      ))}
    </div>
  );
};

