import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Li = ({ children }: Props) => {
  return (
    <li className={cn("h-full text-black dark:text-white")}>{children}</li>
  );
};
