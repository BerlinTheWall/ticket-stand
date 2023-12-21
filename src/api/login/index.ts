import { AxiosResponse } from "axios";
import { simpleAxiosApi } from "../new-api";
import Cookies from "js-cookie";
import { RequestToken, Session } from "@/types/authentication";
import {
  ACCOUNT_ID_COOKIE,
  PROFILE_COOKIE,
  SESSION_ID_COOKIE,
} from "@/constants/cookie";

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
): Promise<AxiosResponse<string>> => {
  try {
    const res = await simpleAxiosApi({
      url: "account",
      data: {
        api_key: api_key,
        session_id: session_id,
      },
    });
    Cookies.set(SESSION_ID_COOKIE, session_id);
    Cookies.set(ACCOUNT_ID_COOKIE, res.data.id);
    localStorage.setItem(PROFILE_COOKIE, JSON.stringify(res.data));
    return res;
  } catch (error) {
    throw error;
  }
};
