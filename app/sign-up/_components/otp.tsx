/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { LucideIcon } from "lucide-react";
import { ComponentProps } from "react";
import { FieldValues, ControllerRenderProps } from "react-hook-form";
import { IconType } from "react-icons/lib";

type Props<T extends FieldValues> = {
  field: ControllerRenderProps<T>;
  label?: string;
  Icon?: IconType | LucideIcon;
  requireField?: boolean;
} & ComponentProps<"input">;

export const Otp = <T extends FieldValues>({
  field,
  label,
  type = "text",
  Icon,
  requireField,
  ...rest
}: Props<T>) => {
  return (
    <FormItem className="w-full space-y-3 py-5 text-black dark:text-black">
      <FormLabel className="">
        Please check your e-mail account for the Verification code we just sent
        you and enter that code in the box below .
        {requireField && <span className="text-red-500">*</span>}
      </FormLabel>
      <FormControl className="">
        <InputOTP maxLength={6} {...field}>
          <InputOTPGroup className="my-20 flex w-full justify-center space-x-2 pt-3 caret-black">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </FormControl>
      <FormMessage className="flex w-full justify-center space-x-2 pt-3 caret-black" />
    </FormItem>
  );
};
