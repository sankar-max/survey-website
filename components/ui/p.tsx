import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
} & ComponentProps<"h1">;
export const P = ({ children, className, ...rest }: Props) => {
  return (
    <p
      {...rest}
      className={cn(
        "font-zetta-font text-2xl text-black dark:text-white",
        className,
      )}
    >
      {children}
    </p>
  );
};
