import { Box, Button, Stack, Typography } from "@mui/material";
import Comment from "@/components/movies/comments/comment";
import { Comment as CommentType } from "@/types/comment";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import { LOGIN_PAGE } from "@/constants/urls";
import Link from "next/link";

type Props = {
  comments: CommentType[];
};

const Comments: React.FC<Props> = ({ comments }) => {
  const loggedIn = useIsLoggedIn();

  return (
    <Box sx={{ paddingX: { sm: 5 } }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          component="h1"
          fontSize={24}
          fontWeight={"bold"}
          my={3}
          paddingLeft={2}
        >
          Comments
        </Typography>
        {loggedIn ? (
          <Button variant="contained" color="secondary">
            Add Comment
          </Button>
        ) : (
          <Link href={LOGIN_PAGE}>
            <Button variant="contained" color="primary">
              Login to Add Comment
            </Button>
          </Link>
        )}
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
