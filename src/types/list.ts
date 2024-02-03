import { profileListType } from "./general";
import { Media } from "./media";
import { Movie } from "./movie";
import { PaginatedList } from "./paginated-list";

export type ListsType = {
  id: number;
  name: string;
  list_type: profileListType;
  item_count: number;
  favorite_count: number;
  description: string;
  poster_path: string;
};

export type SingleListType = {
  description: string;
  created_by: string;
  id: number;
  name: string;
  items: Media[];
  page: number;
  total_pages: number;
  total_results: number;
};
