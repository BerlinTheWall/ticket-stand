import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import ReadMore from "../read-more";
import { convertDate } from "@/utils/date-converter";

type Props = {
  author: string;
  rating: number;
  content: string;
  createdAt: string;
  avatarPath: string;
};

const Comment: React.FC<Props> = ({
  author,
  rating,
  content,
  createdAt,
  avatarPath,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingX: { sm: 5 },
        paddingY: 2,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 5,
        boxShadow: 5,
      }}
    >
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        {avatarPath ? (
          <Image
            src={`https://image.tmdb.org/t/p/w45_and_h45_face${avatarPath}`}
            alt={"profile image"}
            width={40}
            height={40}
            style={{ borderRadius: 25 }}
          />
        ) : (
          <Avatar alt="Profile Icon" />
        )}
        <Typography component={"h2"} sx={{ fontSize: 24, fontWeight: 800 }}>
          {author}
        </Typography>
        <Stack direction={"row"} alignItems={"end"} gap={1} height={30}>
          {rating && (
            <Stack direction={"row"}>
              <Typography sx={{ fontSize: 18 }}>{rating}</Typography>
              <StarRateRoundedIcon sx={{ color: "warning.light", mb: 0.3 }} />
            </Stack>
          )}
          <Typography fontSize={13} color={"gray"}>
            {convertDate(createdAt)}
          </Typography>
        </Stack>
      </Stack>
      <ReadMore text={content} maxLength={290}></ReadMore>
    </Box>
  );
};

export default Comment;
