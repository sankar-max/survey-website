import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"h1">;

export const H1 = ({ children, className, ...rest }: Props) => {
  return (
    <h1
      {...rest}
      className={cn(
        "font-zetta-font text-4xl font-semibold text-black dark:text-white lg:text-7xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};
