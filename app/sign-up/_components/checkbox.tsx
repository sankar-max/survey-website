import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const CheckboxField = ({ field, label }: any) => (
  <FormItem className="flex items-center space-x-3">
    <FormControl>
      <Checkbox
        checked={field.value === "Yes"}
        onCheckedChange={(checked) => field.onChange(checked ? "Yes" : "No")}
      />
    </FormControl>
    <FormLabel>{label}</FormLabel>
    <FormMessage />
  </FormItem>
);
