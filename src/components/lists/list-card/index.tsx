import { Box, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { ListType } from "@/types/list";
import Link from "next/link";
import { SINGLE_MOVIE_PAGE } from "@/constants/urls";
import ListCardDetail from "./list-card-detail";

type Props = {
  list: ListType;
  backgroundImage: any;
};

const ListCard: React.FC<Props> = ({ list, backgroundImage }) => {
  const isMobileXs = useMediaQuery("(max-width:380px)");
  const isMobile = useMediaQuery("(min-width:600px)");
  const isLaptop = useMediaQuery("(max-width:1400px)");

  return (
    <Grid
      item
      height={350}
      xs={12}
      sm={9}
      md={5.5}
      lg={3.64}
      xl={3}
      position={"relative"}
      sx={{ cursor: "pointer", mx: { xs: 1, sm: 2 } }}
      my={1}
    >
      <Link href={`${SINGLE_MOVIE_PAGE}/${list.id}`}>
        <Image
          src={backgroundImage}
          alt={list.name}
          width={1000}
          height={100}
          style={{
            width: "100%",
            height: "70%",
            objectFit: "cover",
            backgroundPosition: "center center",
            borderRadius: "15px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "47%",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",

            background: (theme) =>
              `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 50%)`,
          }}
        />
        <ListCardDetail
          title={list.name}
          count={list.item_count}
          favoriteCount={list.favorite_count}
          listType={list.list_type}
        />
      </Link>
    </Grid>
  );
};

export default ListCard;
