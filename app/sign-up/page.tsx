"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { P } from "@/components/ui/p";
import { Logo } from "@/public/assets/images/logo";
import Link from "next/link";
import SignUpCard from "./_components/signUpCard";
import { ArrowLeft } from "lucide-react";

const Page = () => {
  return <SignUpCard />;
  return (
    <div className="flex h-screen flex-col bg-gradient-to-r from-gray-800 to-teal-400">
      <div className="pl-6 pt-1">
        <Logo width={400} />
      </div>
      <div className="tos-[#0bc1d1] grid grow place-items-center">
        <div className="flex h-full max-h-[28rem] w-full max-w-4xl flex-col rounded-[4rem] p-5 text-white shadow-[5px_3px_27px_-6px_#1e4b78]">
          {/* <H1 className="!text-6xl">Sign up</H1> */}
          <ArrowLeft className="cursor-pointer text-black" />

          <div className="flex h-full items-center justify-center">
            <div className="">
              <P className="!text-base text-white">
                Already have an account?
                <Link
                  href={"/"}
                  className="pl-1 font-semibold text-black underline"
                >
                  Login
                </Link>
              </P>

              <div className="w-full py-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email" className="text-6xl font-bold">
                    Enter your email
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    className="border-white placeholder:text-white"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end pr-6">
            <Button className="rounded-full bg-black">Next</Button>
          </div>
        </div>
      </div>
      <div className="text-right text-2xl font-bold text-white">
        © 2024 ZettaStack. All rights reserved.
      </div>
    </div>
  );
};

export default Page;
