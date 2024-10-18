/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { LucideIcon } from "lucide-react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { IconType } from "react-icons/lib";
import { SelectField } from "./select";
import ImageUpload from "./imageUpload";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props<T extends FieldValues> = {
  data: any;
  field?: ControllerRenderProps<T>;
  label?: string;
  Icon?: IconType | LucideIcon;
  requireField?: boolean;
  control: any;
};
export const ThemeSelect = <T extends FieldValues>({
  data,
  control,
}: Props<T>) => {
  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-10">
        <div className="space-y-6">
          <p className="text-4xl font-bold !text-black">
            Select your theme preference <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-x-4">
            <FormField
              control={control}
              name={data[1]?.name || "emailAddress"}
              render={({ field }) => (
                <>
                  <Colorpallets color={["#091057", "#EC8305", "#DBD3D3"]} />
                  <Colorpallets color={["#789DBC", "#FFE3E3", "#FEF9F2"]} />
                  <Colorpallets color={["#243642", "#A0D683", "#D3EE98"]} />
                  <Colorpallets color={["#FFF0D1", "#795757", "#664343"]} />
                </>
              )}
            />
          </div>
        </div>
        <div className="flex">
          <FormField
            control={control}
            name={data[2]?.name}
            render={({ field }) => (
              <SelectField
                field={field}
                label={data[2]?.label || ""}
                placeholder={data[2]?.label || ""}
                options={data[2]?.options}
                requireField={true}
              />
            )}
          />

          <div className="size-full space-y-6">
            <p className="text-4xl font-bold !text-black">
              Logo
              <span className="text-red-500">*</span>
            </p>
            <div className="">
              <ImageUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Colorpallets(props: any) {
  let { color, size = 60 } = props;
  return (
    <div className={`relative cursor-pointer`}>
      <div
        style={{
          backgroundColor: color[2],
          width: `${size}px`,
          height: `${size}px`,
        }}
        className="relative overflow-hidden rounded-full"
      >
        {/* //todo secondary */}
        <div
          style={{
            backgroundColor: color[1],
          }}
          className="absolute bottom-0 left-0 top-0 h-full w-1/2"
        ></div>
        {/* //todo primary */}
        <div
          style={{
            backgroundColor: color[0],
          }}
          className="absolute left-0 right-0 top-0 h-1/2 w-full"
        ></div>
      </div>
    </div>
  );
}
