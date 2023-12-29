import { AxiosResponse } from "axios";
import { simpleAxiosApi } from "../new-api";
import { RequestToken, Session } from "@/types/authentication";
import { Profile } from "@/types/profile";
import Cookies from "js-cookie";
import { ACCOUNT_COOKIE, SESSION_ID_COOKIE } from "@/constants/cookie";

const api_key = process.env.NEXT_PUBLIC_API_KEY;

export const getRequestToken = async (): Promise<
  AxiosResponse<RequestToken>
> => {
  try {
    const res = await simpleAxiosApi({
      url: "authentication/token/new",
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const createSessionLogin = async (
  username: string,
  password: string,
  token: string
): Promise<AxiosResponse<RequestToken>> => {
  try {
    const res = await simpleAxiosApi({
      url: "authentication/token/validate_with_login",
      method: "POST",
      data: {
        username: username,
        password: password,
        request_token: token,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getSessionId = async (
  token: string
): Promise<AxiosResponse<Session>> => {
  try {
    const res = await simpleAxiosApi({
      url: "authentication/session/new",
      method: "POST",
      data: {
        request_token: token,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getAccount = async (
  session_id: string
): Promise<AxiosResponse<Profile>> => {
  try {
    const res = await simpleAxiosApi({
      url: "account",
      data: {
        api_key: api_key,
        session_id: session_id,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const signOut = async (
  session_id: string
): Promise<AxiosResponse<any>> => {
  try {
    const res = await simpleAxiosApi({
      url: "authentication/session",
      method: "DELETE",
      data: {
        session_id: session_id,
      },
    });
    Cookies.remove(SESSION_ID_COOKIE);
    Cookies.remove(ACCOUNT_COOKIE);
    return res;
  } catch (error) {
    throw error;
  }
};
