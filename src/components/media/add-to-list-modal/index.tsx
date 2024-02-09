import { useLists } from "@/api/profile/hooks/useLists";
import LoadingSpinner from "@/components/loading-spinner";
import CustomModal from "@/components/modal";
import { AppContext } from "@/context/AppContext";
import { ContextValue } from "@/types/general";
import { ListsType } from "@/types/list";
import { PaginatedList } from "@/types/paginated-list";
import { Box, ButtonBase, Divider, Stack, Typography } from "@mui/material";
import {
  QueryClient,
  UseMutationResult,
  UseQueryResult,
  useQueryClient,
} from "@tanstack/react-query";
import { useContext } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { toast } from "react-toastify";
import { useAddMovieToList } from "@/hooks/useAddMovieToList";

const AddToListModal: React.FC = () => {
  const { user, showListModal, closeListModal } = useContext(
    AppContext
  ) as ContextValue;
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isFetching,
  }: UseQueryResult<PaginatedList<ListsType>, Error> = useLists(user!.id, {
    enabled: showListModal && !!user!.id,
  });
  const addCarMutation: UseMutationResult<any, Error, any> =
    useAddMovieToList();

  const handleAddToList = async (list: ListsType) => {
    try {
      if (showListModal.isMovie) {
        await addCarMutation.mutateAsync({
          listId: list.id,
          data: {
            media_id: showListModal.id,
          },
        });
        toast.success(`Added to ${list.name} list`);
        queryClient.invalidateQueries(["lists"]);
      } else {
        toast.error(`Sorry! Add TV Serie API to list isn't available :(`);
      }
    } catch (error: any) {
      if (error.response.status === 403) {
        toast.error(error.response.data.status_message);
      } else toast.error("Failed to add to list");
    }
  };

  return (
    <>
      <CustomModal
        width={450}
        open={showListModal.open}
        onClose={closeListModal}
      >
        <Stack height={"100%"} width={"100%"}>
          <Typography component="h2" fontSize={26} fontWeight={600} mb={2}>
            Lists
          </Typography>

          {isFetching || isLoading ? (
            <LoadingSpinner />
          ) : (
            <Stack spacing={2} maxHeight="60vh" overflow="auto" p={2}>
              {data?.results.map((item) => {
                return (
                  <Stack
                    key={item.id}
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      border: "1px solid",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      boxShadow: (theme) =>
                        `0px 2px 8px ${theme.palette.error.main}`,
                      filter: (theme) =>
                        `drop-shadow(0px 2px 1px ${theme.palette.info.main} )`,
                    }}
                    component={ButtonBase}
                    onClick={() => handleAddToList(item)}
                  >
                    <Typography fontWeight={600}>{item.name}</Typography>
                    <Stack
                      divider={<Divider orientation="vertical" flexItem />}
                      direction="row"
                      spacing={1}
                    >
                      <Typography>{item.item_count}</Typography>
                      <Typography>{item.list_type}</Typography>
                      <AddCircleOutlineIcon />
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          )}
        </Stack>
      </CustomModal>
    </>
  );
};

export default AddToListModal;
