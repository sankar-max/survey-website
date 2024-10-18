import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = {
  field: ControllerRenderProps<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  options?: string[];
  requireField?: boolean;
};
export const SelectField = <T extends FieldValues>({
  field,
  placeholder,
  options = [""],
  label,
  requireField,
}: Props<T>) => (
  <FormItem className="w-full space-y-6 text-black dark:text-black">
    <FormLabel>
      {label} {requireField && <span className="text-red-500">*</span>}
    </FormLabel>
    <FormControl>
      <RadioGroup
        onValueChange={field.onChange}
        defaultValue={field.value}
        className="flex flex-col space-y-1"
      >
        {options.map((option: string, idx: number) => (
          <FormItem className="flex items-center space-x-3 space-y-0">
            <FormControl>
              <RadioGroupItem className="" value={option} />
            </FormControl>
            <FormLabel className="font-normal">{option}</FormLabel>
          </FormItem>
        ))}
      </RadioGroup>
    </FormControl>
    <FormMessage />
  </FormItem>
);
