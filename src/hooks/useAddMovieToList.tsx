import { simpleAxiosApi } from "@/api/new-api";
import { useMutation } from "@tanstack/react-query";

export const useAddMovieToList = () => {
    return useMutation<any, Error, any, any>(
      (formData: {
        listId: number;
        data: {
          media_id: string;
        };
      }): Promise<any> => {
        
        return simpleAxiosApi({
          url: `list/${formData.listId}/add_item`,
          method: "POST",
          data: formData.data,
        });
      }
    );
  };
  