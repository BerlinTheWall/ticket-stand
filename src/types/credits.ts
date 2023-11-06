export type Cast = {
  character: string;
  credit_id: string;
  name: string;
  original_name: string;
  profile_path: string;
};

export type Credit = {
  id: number;
  cast: Cast[];
};
