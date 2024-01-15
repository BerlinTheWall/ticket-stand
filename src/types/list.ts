import { profileListType } from "./general";

export type ListType = {
  id: number;
  name: string;
  list_type: profileListType;
  item_count: number;
  favorite_count: number;
  description: string;
  poster_path: string;
};
