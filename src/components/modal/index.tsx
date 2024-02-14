import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IChildren } from "@/types/component-type/IChildren";
import { BORDER_RADIUS } from "@/mui/border-radius";

type Props = {
  open: boolean;
  onClose: (value: boolean) => void;
  children: React.ReactNode;
  width?: number;
  height?: number;
};

const CustomModal: React.FC<Props> = ({
  open,
  onClose,
  width,
  height,
  children,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    px: 3,
    py: 2,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
      >
        <Fade in={open} timeout={400}>
          <Box sx={style} width={width} height={height} borderRadius={4}>
            {children}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default CustomModal;
