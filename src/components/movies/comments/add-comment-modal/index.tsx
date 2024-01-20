import { FormInputSlider } from "@/components/forms/slider-input";
import { FormInputTextArea } from "@/components/forms/text-area-input";
import CustomModal from "@/components/modal";
import { LOGIN_PAGE } from "@/constants/urls";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import { LoadingButton } from "@mui/lab";
import { Button, Link, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormInput {
  comment: string;
}

const defaultValues = {
  comment: "",
};

const marks = [
  { value: 0, label: "0" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
];

const AddCommentModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const loggedIn = useIsLoggedIn();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    toast.success(
      "Comment submitted successfully!\n (The API isn't available so the comment will not be shown)"
    );
  };

  const handleShow = () => setShowModal(true);
  const handleHide = () => setShowModal(false);

  return (
    <>
      {loggedIn ? (
        <Button variant="contained" color="secondary" onClick={handleShow}>
          Add Comment
        </Button>
      ) : (
        <Link href={LOGIN_PAGE}>
          <Button variant="contained" color="primary">
            Login to Add Comment
          </Button>
        </Link>
      )}
      <CustomModal
        width={600}
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <Stack height={"100%"} width={"100%"} gap={3}>
          <Typography
            id="modal-modal-title"
            component="h2"
            fontSize={26}
            fontWeight={"600"}
            marginBottom={1}
          >
            Add Comment
          </Typography>
          <FormInputSlider
            name={"score"}
            control={control}
            label={"IMDB Rating"}
            step={0.1}
            min={0}
            max={10}
            marks={marks}
            sx={{ pb: 2 }}
          />
          <FormInputTextArea
            name={"comment"}
            control={control}
            label={"Comment"}
            inputType="text"
            rows={5}
            rules={{
              required: "This field is required",
            }}
          />
          <Stack direction={"row"} justifyContent={"end"} gap={2}>
            <Button variant="outlined" onClick={handleHide}>
              Cancel
            </Button>
            <LoadingButton
              onClick={handleSubmit(onSubmit)}
              variant={"contained"}
              sx={{ height: 40 }}
              loading={isSubmitting}
            >
              Save
            </LoadingButton>
          </Stack>
        </Stack>
      </CustomModal>
    </>
  );
};

export default AddCommentModal;
