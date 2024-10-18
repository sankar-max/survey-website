import { surveySchema } from "@/schema/survey-form";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpPropsT } from "./userForm";
import { Checkbox } from "@/components/ui/checkbox";
import { surveyFormData } from "@/data/surveyFormData";

export const SurveyFormDetail = ({
  setCurrentFormIndex,
  currentFormIndex,
  setSignUpData,
}: SignUpPropsT) => {
  const form = useForm<z.infer<typeof surveySchema>>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      surveysPerMonth: 0,
      primaryGoal: "Market Research",
      expectedResponses: 0,
      needsAnalytics: "No",
      integrations: "No",
      customBranding: "No",
      multipleTeamMembers: "No",
      dedicatedAccountManager: "No",
      agreeToTerms: false,
      receiveUpdates: "No",
    },
  });

  const handleToBack = () => setCurrentFormIndex((prev) => prev - 1);

  const onSubmit = (data: z.infer<typeof surveySchema>) => {
    if (surveySchema.parse(data)) {
      setSignUpData((prev) => ({ ...prev, surveyForm: data }));
      setCurrentFormIndex((prev) => prev + 1);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {surveyFormData.map((fieldData, index) => {
            if (fieldData.type === "number") {
              return (
                <FormField
                  key={index}
                  control={form.control}
                  name={fieldData.name as keyof z.infer<typeof surveySchema>}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{fieldData.placeholder}</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder={fieldData.placeholder}
                          value={
                            typeof field.value === "boolean"
                              ? field.value.toString()
                              : field.value
                          }
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            } else if (fieldData.type === "select") {
              return (
                <FormField
                  key={index}
                  control={form.control}
                  name={fieldData.name as keyof z.infer<typeof surveySchema>}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {`Select ${fieldData.name.split(/(?=[A-Z])/).join(" ")}`}
                      </FormLabel>
                      <Select
                        onValueChange={(value) => {
                          if (fieldData.name === "expectedResponses") {
                            field.onChange(Number(value));
                          } else {
                            field.onChange(value);
                          }
                        }}
                        defaultValue={String(field.value)}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={`Select ${fieldData.name}`}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {fieldData &&
                            fieldData?.options?.map((option, idx) => (
                              <SelectItem key={idx} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            } else if (fieldData.type === "checkbox") {
              return (
                <FormField
                  key={index}
                  control={form.control}
                  name={fieldData.name as keyof z.infer<typeof surveySchema>}
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={
                            field.value === true || field.value === "Yes"
                          }
                          onCheckedChange={(checked) =>
                            field.onChange(checked ? "Yes" : "No")
                          }
                        />
                      </FormControl>
                      <div>
                        <FormLabel>{fieldData.label}</FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              );
            }
            return null;
          })}

          <div className="flex justify-end gap-x-3">
            {currentFormIndex === 1 && (
              <Button onClick={handleToBack} type="submit">
                <span>
                  <ArrowLeft size={18} />
                </span>
                Back
              </Button>
            )}
            <Button type="submit">
              Next
              <span>
                <ArrowRight size={18} />
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
