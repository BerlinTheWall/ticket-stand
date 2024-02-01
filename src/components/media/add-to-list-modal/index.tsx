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

const AddToListModal: React.FC = () => {
  const { user, showListModal, toggleListModal } = useContext(AppContext)!;
  const queryClient = new QueryClient();

  return (
    <>
      <CustomModal width={600} open={showListModal} onClose={toggleListModal}>
        <Stack height={"100%"} width={"100%"}>
          <Typography
            id="modal-modal-title"
            component="h2"
            fontSize={26}
            fontWeight={"600"}
          >
            Lists
          </Typography>
        </Stack>
      </CustomModal>
    </>
  );
};

export default AddToListModal;
