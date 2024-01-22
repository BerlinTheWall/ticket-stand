import { AxiosResponse } from "axios";
import { simpleAxiosApi } from "../new-api";
import { SingleListType } from "@/types/list";

export const getSingleList = async (
  listId: string
): Promise<AxiosResponse<SingleListType>> => {
  try {
    const res = await simpleAxiosApi({
      url: `list/${listId}`,
      method: "GET",
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const createList = async (
  name: string,
  description: string
): Promise<AxiosResponse<any>> => {
  try {
    const res = await simpleAxiosApi({
      url: "list",
      method: "POST",
      data: {
        name: name,
        description: description,
        language: "en",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
