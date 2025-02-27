import { Box, Button, Stack, Typography } from "@mui/material";
import Comment from "@/components/movies/comments/comment";
import { Comment as CommentType } from "@/types/comment";
import AddCommentModal from "./add-comment-modal";

type Props = {
  comments: CommentType[];
};

const Comments: React.FC<Props> = ({ comments }) => {
  return (
    <Box sx={{ paddingX: { sm: 5, xs: 2 } }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          component="h1"
          fontSize={24}
          fontWeight={"bold"}
          sx={{ paddingLeft: { xs: 0, sm: 2 } }}
          my={3}
        >
          Comments
        </Typography>
        <AddCommentModal />
      </Stack>
      <Stack direction={"column"} gap={2}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              author={comment.author}
              rating={comment.author_details.rating}
              content={comment.content}
              createdAt={comment.created_at}
              avatarPath={comment.author_details.avatar_path}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Comments;
