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

const Navbar = () => {
  return (
    <motion.div
      className="sticky top-0 z-[100]  border-b bg-[#FAF9F6] shadow-2xl dark:bg-black"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="hidden h-full items-center gap-x-7 md:flex">
          <Link href={"/"} className="flex h-full items-center justify-center">
            <div className="flex gap-x-2 items-center">
              <DiamondPercent size={30} className="text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-1" />
              <span className="text-black  text-xl font-semibold">Zsurvey</span>
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
