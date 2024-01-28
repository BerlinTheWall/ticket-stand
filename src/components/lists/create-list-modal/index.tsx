import { createList } from "@/api/lists";
import { FormInputTextArea } from "@/components/forms/text-area-input";
import { FormInputText } from "@/components/forms/text-input";
import CustomModal from "@/components/modal";
import { AppContext } from "@/context/AppContext";
import { LoadingButton } from "@mui/lab";
import { Button, Stack, Typography } from "@mui/material";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormInput {
  name: string;
  description: string;
}

const defaultValues = {
  name: "",
  description: "",
};

const CreateListModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { user } = useContext(AppContext);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<IFormInput>({
    defaultValues: defaultValues,
  });

  const queryClient = new QueryClient();
  //   const createNewListMutation = useMutation<any, any, any, any>(
  //     (name: string, description: string) => createList(name, description)
  //   );

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const createdList = await createList(data.name, data.description);
      queryClient.invalidateQueries(["lists", user.id]);
      toast.success("List created successfully!");

      console.log(createdList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShow = () => setShowModal(true);
  const handleHide = () => setShowModal(false);

  return (
    <>
      <Button variant="contained" onClick={handleShow}>
        Create List
      </Button>
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
          >
            Create List
          </Typography>
          <FormInputText
            name={"name"}
            control={control}
            label={"Name"}
            inputType="text"
            rules={{
              required: "This field is required",
            }}
          />
          <FormInputTextArea
            name={"description"}
            control={control}
            label={"Description"}
            inputType="text"
            rows={3}
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

export default CreateListModal;