import { Genre } from "@/types/genres";

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  inputType?: string;
  options?: Genre[];
  selectedDropdownText?: string;
  ref?: any;
  setValue?: any;
  rules?: any;
}
