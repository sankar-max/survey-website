"use client";
import { Logo } from "@/public/assets/images/logo";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { headerData } from "@/data/headerData";
import { HeaderListItem } from "./headerListItem";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[100] border-b bg-white shadow-2xl dark:bg-black">
      <div className="container flex h-16 items-center justify-between">
        <div className="hidden h-full items-center gap-x-7 md:flex">
          <Link href={"/"} className="flex h-full items-center justify-center">
            <Logo />
          </Link>
          <ul className="flex h-full grow items-center justify-center gap-x-2 text-white md:space-x-4 [&:hover>:not(li:hover)]:opacity-75 [&>li:hover]:border-b-2 [&>li]:flex [&>li]:h-full [&>li]:cursor-pointer [&>li]:items-center [&>li]:justify-center [&>li]:border-primary [&>li]:transition-opacity [&>li]:ease-in-out">
            {headerData.map((item, ind) => (
              <HeaderListItem key={ind} item={item} />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-6">
          <ThemeSwitcher />
          <Link href={"/sign-up"} className="flex items-center gap-x-2">
            <Button variant={"secondary"} className="">
              Sign in
            </Button>
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
