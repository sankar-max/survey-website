"use client";
import { Logo } from "@/public/assets/images/logo";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { headerData } from "@/data/headerData";
import { HeaderListItem } from "./headerListItem";
import { motion } from "framer-motion";
import { DiamondPercent } from "lucide-react";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useScroll } from "framer-motion";

const Navbar = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    let lastScrollY = 0;
    let timeoutId: NodeJS.Timeout;

    const updateNavbar = () => {
      if (scrollY.get() > lastScrollY) {
        controls.start({ y: "-100%" });
      } else {
        controls.start({ y: "0%" });
      }
      lastScrollY = scrollY.get();
    };

    const debouncedUpdateNavbar = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateNavbar, 50);
    };

    const unsubscribe = scrollY.onChange(debouncedUpdateNavbar);
    return () => {
      clearTimeout(timeoutId);
      unsubscribe();
    };
  }, [scrollY, controls]);

  return (
    <motion.div
      className="sticky top-0 z-[100] border-b bg-[#FAF9F6] shadow-2xl shadow-gray-400 dark:bg-black"
      initial={{ y: 0 }}
      animate={controls}
      transition={{ duration: 0.2 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="hidden h-full items-center gap-x-7 md:flex">
          <Link href={"/"} className="flex h-full items-center justify-center">
            <div className="flex gap-x-2 items-center">
              <DiamondPercent size={30} className="text-white 
              bg-[linear-gradient(108.7deg,rgba(221,22,224,1)11%,rgba(111,22,190,1)88.2%)] rounded-full p-1" />
              <span className="text-black dark:text-white  text-xl font-semibold">Zsurvey</span>
            </div>
          </Link>
          <ul className="flex h-full grow items-center justify-center gap-x-2 text-white md:space-x-4 [&:hover>:not(li:hover)]:opacity-75 [&>li:hover]:border-b-2 [&>li]:flex [&>li]:h-full [&>li]:cursor-pointer [&>li]:items-center [&>li]:justify-center [&>li]:border-primary [&>li]:transition-opacity [&>li]:ease-in-out">
            {headerData.map((item, ind) => (
              <HeaderListItem key={ind} item={item} />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-6">
          <ThemeSwitcher />
          <div className="flex items-center gap-x-2">
            <Link href={"https://surveydev.zettastack.com/login"}>
              <Button variant={"secondary"} className="">
                Sign in
              </Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
