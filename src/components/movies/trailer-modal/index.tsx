import CustomModal from "@/components/modal";
import { Button, useMediaQuery } from "@mui/material";
import { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ReactPlayer from "react-player";

type Props = {
  url: string;
};

const TrailerModal: React.FC<Props> = ({ url }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => setShowModal((prev) => !prev);
  const isMobile = useMediaQuery("(min-width:600px)");
  const isTablet = useMediaQuery("(min-width:900px)");
  const width = !isMobile ? 375 : isTablet ? 800 : 550;
  const height = !isMobile ? 275 : isTablet ? 500 : 400;

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={toggleModal}
        startIcon={<PlayCircleFilledIcon />}
        sx={{
          whiteSpace: "nowrap",
        }}
      >
        Watch Trailer
      </Button>
      <CustomModal
        width={width}
        height={height}
        open={showModal}
        onClose={toggleModal}
      >
        <ReactPlayer
          //   className="react-player"
          url={url}
          width="100%"
          height={"100%"}
          controls={true}
          light={false}
          pip={true}
        />
      </CustomModal>
    </>
  );
};

export default TrailerModal;
