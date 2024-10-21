/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button } from "@/components/ui/button";
import { FormField, Form } from "@/components/ui/form";
import { ArrowLeft, ArrowRight, Loader2Icon } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema } from "@/schema/sign-up-schema";
import { signUpCardT, signUpDataList as signUpData } from "@/data/signUpData";
import { SelectField } from "./select";
import { CheckboxField } from "./checkbox";
import { useEffect, useState } from "react";
import { H1 } from "@/components/ui/h1";
import Link from "next/link";
import { Logo } from "@/public/assets/images/logo";
import { PricingPlan } from "@/components/pricingCard";
import { cn } from "@/lib/utils";
import { P } from "@/components/ui/p";

import { Otp } from "./otp";
import { ThemeSelect } from "./themeSelect";
import SecureNReliable from "@/public/assets/images/secure&reliable";
import Image from "next/image";
import { TextBox } from "./textBox";

export type PlanPriceT = {
  description: string;
  header: string;
  id: string;
  name: string;
  subHeader: string;
}[];

type signUpForm = z.infer<typeof signUpSchema>;

const imageList = [
  {
    url: "/Customer Survey-amico.svg",
    text: "In a changing healthcare environment, the need for timely and reliable feedback remains a constant.",
  },
  {
    url: "/secure&reliable.svg",
    text: "The security of your data is our priority.Keep your survey information confidential and secure.",
  },
  {
    url: "/surveyEditor.svg",
    text: "Customize your surveys with ease using advanced features.",
  },
];

const SignUpCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [planData, setPlanData] = useState<PlanPriceT | []>([]);
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const progress = ((currentFormIndex + 1) / signUpData.length) * 100;

  const form = useForm<signUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      emailAddress: "sankarvj18@gmail.com",
      password: "sankar18!",
      confirmPassword: "sankar18!",
      firstName: "sankar",
      lastName: "sankar",
      companyName: "sankar",
      phoneNumber: null,
      verificationCode: "123456",
      accountType: "Personal",
      uploadLogo: undefined,
      themePrimaryColor: "red",
      themeSecondaryColor: "blue",
      font: "Arial",
      plan: "Basic Plan",
    },
    mode: "onChange",
  });

  const renderField = (fieldData: signUpCardT[number], index: number) => {
    const {
      type,
      name,
      placeholder,
      options,
      label,
      accept,
      icon,
      require,
      other,
    } = fieldData;
    if (type === "theme")
      return <ThemeSelect key={index} data={other} control={form.control} />;
    return (
      <FormField
        key={index}
        control={form.control}
        name={name || "emailAddress"}
        render={({ field }) => {
          switch (type) {
            case "email":
            case "password":
            case "text":
            case "number":
              return (
                <TextBox
                  type={type}
                  placeholder={placeholder}
                  field={field}
                  label={placeholder || label}
                  accept={accept}
                  Icon={icon}
                  requireField={require}
                />
              );
            case "select":
              return (
                <SelectField
                  field={field}
                  label={label}
                  placeholder={placeholder}
                  options={options}
                  requireField={require}
                />
              );
            case "pricingPlan":
              return planData?.length > 0 ? (
                <PricingPlan data={planData} />
              ) : (
                <div className="grid place-items-center">
                  <Loader2Icon className="animate-spin text-center" />
                </div>
              );
            case "otp":
              return (
                <Otp
                  type={type}
                  placeholder={placeholder}
                  field={field}
                  label={placeholder || label}
                  requireField={require}
                />
              );

            case "checkbox":
              return <CheckboxField field={field} label={label} />;
            default:
              return <></>;
          }
        }}
      />
    );
  };
  const handleNext = async () => {
    const fieldsToValidate = signUpData[currentFormIndex].map(
      (v) => v.name || "emailAddress",
    );
    const isValid = await form.trigger(fieldsToValidate);
    if (currentFormIndex < signUpData.length - 1 && isValid) {
      setCurrentFormIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentFormIndex > 0) {
      setCurrentFormIndex((prevIndex) => prevIndex - 1);
    }
  };
  const onSubmit = (data: signUpForm) => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://surveytest.tangoanalytics.com/service/portal/v1/loadSurveyPlans",
          {
            method: "GET",
            headers: {
              ACCESSKEY: "CXME3RUK5AHVMLRCIEYPOP7UZDYH4ZAPZ",
              SECRETKEY: "aEKLwdHUEke0tR4oGf1TyRZOIc84pWpsDc5jZHCUirk=",
            },
          },
        );

        const { data } = (await response.json()) || {};

        if (data) {
          setPlanData(data);
        }
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="absolute top-0 z-[-2] grid h-screen w-screen place-items-center bg-gradient-to-r from-gray-800 to-teal-400">
      <div className="grid h-full max-h-full grid-cols-5 overflow-hidden rounded-3xl p-3 md:self-center">
        <div className="col-span-2 grid h-full place-items-center">
          <div className="relative">
            <ImageCarousel />
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="col-span-3 flex w-full flex-col justify-between overflow-hidden rounded-3xl bg-white py-7 shadow-[0px_0px_11px_17px_rgba(0,_0,_0,_0.1)]"
          >
            <div className="overflow-hidden">
              <div className={cn("bg-white px-10")}>
                {currentFormIndex > 0 && (
                  <Button
                    type="button"
                    variant={"transparent"}
                    className="border-none p-0 shadow-none"
                    onClick={handlePrev}
                  >
                    <ArrowLeft className="mr-2 !text-black" />
                  </Button>
                )}
                <Link
                  href={"/"}
                  className="-z-0 flex items-center justify-center"
                >
                  <Logo width={500} height={40} />
                </Link>
                {currentFormIndex === 0 && (
                  <div className="space-y-5">
                    <H1 className="!text-4xl !font-bold !text-black dark:text-black">
                      Sign up
                    </H1>
                    <p className="text-lg font-medium !text-black">
                      Let&apos;s get started. Are you ready to be a part of
                      something new? Then boldly move forward with us.
                    </p>
                  </div>
                )}
                {currentFormIndex === 0 && (
                  <P className="cursor-pointer !text-lg font-medium">
                    Already have an account?
                    <span className="text-primary hover:underline"> Login</span>
                  </P>
                )}
              </div>

              <div className="flex h-full overflow-hidden py-20">
                {signUpData.map((stepperFrom) => {
                  return (
                    <div
                      key=""
                      className={cn(
                        "h-full w-full min-w-full items-center overflow-hidden bg-white px-10 transition-transform duration-500 ease-in-out",
                        // currentFormIndex !== 0 &&
                        //   stepperFrom.length === 1 &&
                        //   "flex self-center",
                        currentFormIndex,
                      )}
                      style={{
                        transform: `translateX(-${currentFormIndex * 100}%)`,
                      }}
                    >
                      <div
                        className={cn(
                          "h-full w-full space-y-8 overflow-y-auto",
                          renderField.length === 1 &&
                            "flex h-full items-center",
                        )}
                      >
                        {stepperFrom.map(renderField)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-end px-10">
              <div className="">
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-gray-800 to-teal-400"
                >
                  Continue
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpCard;

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="flex size-full overflow-x-hidden">
        {imageList.map((img, ind) => (
          <div
            key={ind}
            className={cn(
              "grid min-h-full min-w-full place-items-center overflow-hidden px-2",
              currentIndex !== 0 &&
                "transition-transform duration-500 ease-in-out",
            )}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className="flex justify-center">
              <Image height={300} width={400} alt="img" src={img.url} />
            </div>
            <P className="rounded-md bg-slate-900/30 p-5 !text-white">
              {img.text}
            </P>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-x-1.5 py-5">
        {imageList.map((_, ind) => (
          <div
            key={ind}
            onClick={() => setCurrentIndex(ind)}
            className={cn(
              "size-2 cursor-pointer rounded-xl !bg-white",
              currentIndex === ind && "w-4 rounded-sm",
            )}
          />
        ))}
      </div>
    </div>
  );
}
