import { cn } from "@/lib/utils";
import { ReactNode, ComponentProps } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"h1">;

export const H4 = ({ children, className, ...rest }: Props) => {
  return (
    <h1
      {...rest}
      className={cn(
        "text-2xl font-bold leading-none tracking-tight text-black dark:text-white",
        className,
      )}
    >
      {children}
    </h1>
  );
};
