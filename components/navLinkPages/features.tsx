import React from 'react'
import Image from 'next/image';
import { featuresData } from '@/data/features';
import { H4 } from '@/components/ui/h4';
import { cn } from '@/lib/utils';
import { P } from '@/components/ui/p';
import { Button } from '../ui/button';
import { H1 } from '../ui/h1';
import { ArrowRight } from 'lucide-react';
// import mm from "../../public/feature.svg"
import { IoChevronDownCircle } from "react-icons/io5";

export default function Features() {
  return (
    <div className="container space-y-5">
      <div className="grid place-items-center lg:py-36">
        <div className="h- grid items-center gap-x-2 gap-y-7 md:grid-cols-7">
          <div className="col-span-3 space-y-7">
            <div className="">
              <H1>ZettaSurvey ​Features​</H1>
              <P className="">
                ZettaSurvey is very user friendly yet packed full of
              </P>
              <P>Advanced Features. Sign up</P>
            </div>
            <div className="flex items-center gap-x-3">
              <Button className="group">
                Sign Up
                <span className="ml-2 text-xl duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </Button>
            </div>
          </div>
          <div className="col-span-4 h-[400px] w-full">
            <div className="relative h-full w-full">
              <Image src="/feature.svg" alt="hero-image" fill />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center ">
        <div className="space-y-5">
          <H1>Why ZettaSurvey?</H1>
          <P className="">
            ZettaSurvey helps user to create Surveys with multiple Features.
          </P>
          <div className="flex justify-center">
            <IoChevronDownCircle size={60} className="text-blue-600" />
          </div>
        </div>
      </div>

      {/* <div className="space-y-7 pt-12">
        {featuresData.map((item, ind) => (
          <div
            key={ind}
            className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2"
          >
            <div className={cn("space-y-2", ind % 2 !== 0 && "order-2")}>
              <H4 className="font-bold">{item?.title}</H4>
              <ul className="mt-10 list-disc space-y-3 pl-5">
                {item.points.map((point, i) => (
                  <li key={i} className="text-lg leading-relaxed text-black">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={cn("relative h-96 w-full", ind % 2 !== 0 && "order-1")}
            >
              <Image src={item.img} alt={item.title} fill />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
