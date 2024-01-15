export type CommentAuthor = {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
};

export type Comment = {
  id: string;
  author: string;
  author_details: CommentAuthor;
  content: string;
  created_at: string;
};
