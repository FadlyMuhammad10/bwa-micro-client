import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SelectForm({ form, name, label }) {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="text-[#132B50]">
            <FormLabel className="text-[#132B50]">{label}</FormLabel>

            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-full rounded-none  focus:outline-none border-[#7186A0] ">
                  <SelectValue placeholder="Select you Occupation" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Web Engineer">Web Engineer</SelectItem>
                <SelectItem value="Mobile Engineer">Mobile Engineer</SelectItem>
                <SelectItem value="Data Engineer">Data Engineer</SelectItem>
                <SelectItem value="Designer">Designer</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
