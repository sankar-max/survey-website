import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ComponentProps } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { IconType } from "react-icons/lib";

type Props<T extends FieldValues> = {
  field: ControllerRenderProps<T>;
  label?: string;
  Icon?: IconType | LucideIcon;
  requireField?: boolean;
} & ComponentProps<"input">;

export const TextBox = <T extends FieldValues>({
  field,
  label,
  type = "text",
  Icon,
  requireField,
  ...rest
}: Props<T>) => {
  return (
    <FormItem className="w-full space-y-3 text-black dark:text-black">
      <FormLabel>
        {label} {requireField && <span className="text-red-500">*</span>}
      </FormLabel>{" "}
      <FormControl>
        <div className="relative">
          {type !== "file" && Icon && (
            <Icon className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-primary" />
          )}
          <Input
            placeholder="Enter your email"
            className={cn(
              "border-primary py-6 text-2xl text-black dark:text-black",
              type !== "file" && "pl-10",
            )}
            type={type}
            {...field}
            {...rest}
          />
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
export const ColorBox = <T extends FieldValues>({
  field,
  label,
  type = "text",
  requireField,
  ...rest
}: Props<T>) => {
  return (
    <div>
      <FormItem className="w-full text-black dark:text-black">
        <FormLabel>
          {label} {requireField && <span className="text-red-500">*</span>}
        </FormLabel>{" "}
        <div className="flex gap-x-3">
          <FormControl>
            <Input
              className="size-9 border-none p-0 text-black [appearance:none] dark:text-black"
              type={type}
              {...field}
              {...rest}
              autoComplete="off"
            />
          </FormControl>
          <FormControl>
            <Input
              className="border-primary text-black [appearance:none] dark:text-black"
              {...field}
              {...rest}
              autoComplete="off"
            />
          </FormControl>
        </div>
        <FormMessage />
      </FormItem>
    </div>
  );
};
