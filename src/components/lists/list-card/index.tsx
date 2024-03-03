import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { ListsType } from "@/types/list";
import Link from "next/link";
import { SINGLE_LIST_PAGE } from "@/constants/urls";
import ListCardDetail from "./list-card-detail";

type Props = {
  list: ListsType;
  backgroundImage: any;
};

const ListCard: React.FC<Props> = ({ list, backgroundImage }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box
        sx={{
          cursor: "pointer",
          position: "relative",
          height: 350,
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <Link href={`${SINGLE_LIST_PAGE}/${list.id}`}>
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
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "47%",
              background: (theme) =>
                `linear-gradient(to bottom, transparent 0%, ${theme.palette.background.paper} 50%)`,
            }}
          />
          <ListCardDetail
            title={list.name}
            count={list.item_count}
            listType={list.list_type}
          />
        </Link>
      </Box>
    </Grid>
  );
};

export default ListCard;
