import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"li">;

export const Li = ({ children, className, ...rest }: Props) => {
  return (
    <li
      {...rest}
      className={cn(
        "h-full font-zetta-font text-lg text-black dark:text-white",
        className,
      )}
    >
      {children}
    </li>
  );
};
