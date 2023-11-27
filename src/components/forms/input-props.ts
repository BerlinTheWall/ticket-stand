import { Genre } from "@/types/genres";

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  inputType?: string;
  options?: Genre[];
  selectedDropdownText?: string;
  setValue?: any;
  rules?: any;
}
