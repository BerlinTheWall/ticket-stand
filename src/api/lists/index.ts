import { AxiosResponse } from "axios";
import { simpleAxiosApi } from "../new-api";
import { SingleListType } from "@/types/list";
import { filteringMethod } from "@/utils/utils";


export const getLists = async (
  accountId: number,
  page?: number
): Promise<AxiosResponse<SingleListType>> => {
  try {
    const res = await simpleAxiosApi({
      url: `/account/${accountId}/lists`,
      method: "GET",
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getSingleList = async (
  listId: string,
  page: number
): Promise<AxiosResponse<SingleListType>> => {
  try {
    const res = await simpleAxiosApi({
      url: `list/${listId}?page=${page}`,
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

export const addMovieToList = async (
  listId: number,
  mediaId: string
): Promise<AxiosResponse<any>> => {
  try {
    const res = await simpleAxiosApi({
      url: `list/${listId}/add_item`,
      method: "POST",
      data: {
        media_id: mediaId,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};


export const addTVSerieToList = async (
  listId: number,
  mediaId: string
): Promise<AxiosResponse<any>> => {
  try {
    const res = await simpleAxiosApi({
      url: `list/${listId}/items`,
      method: "POST",
      data: {
        media_id: mediaId,
        media_type: "tv",
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
