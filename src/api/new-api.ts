import axios from "axios";
import Cookies from "js-cookie";
// import { toast } from "react-toastify";
let tryCount = 0;
const baseURL = process.env.NEXT_PUBLIC_API_URL;
const apiCode = process.env.NEXT_PUBLIC_API_CODE;

// controlled
const client = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: "Bearer " + apiCode,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// controlled
export const simpleAxiosApi = ({ ...options }) => {
  // client.defaults.headers.common.apiCode = apiCode;
  // client.defaults.headers.common.Accept = "application/json";
  //   client.defaults.headers.common["Content-Type"] = "application/json";
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    console.log(error);
    // optionaly catch errors and add additional logging here
    return error;
  };

  return client(options).then(onSuccess);
};

// controlled
export const axiosApi = ({ ...options }) => {
  // if (!Cookies.get("token")) {
  //   window.location.href = "/login";
  // }

  // client.defaults.headers.Authorization = "Bearer " + Cookies.get("token");
  // client.defaults.headers.common.apiCode = apiCode;
  // client.defaults.headers.common.Accept = "application/json";
  // client.defaults.headers.common["Content-Type"] = "application/json";

  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    let e = error;
    let msg = e.response.data.Message;

    console.log(error);

    // toast.error(msg ?? "خطا  ");

    throw error;
  };

  return client(options).catch((e) => onError(e));
  // return client(options).then(onSuccess).catch(onError);
};

client.interceptors.response.use(
  (response) => {
    // console.log(response);

    return response;
  },
  async (error) => {
    // console.log(error.response);
    // const { logout } = useContext(authContext);
    // console.log(tryCount);
    // console.log(
    //   '**t***',
    //   error.config && error.response && error.response.status === 401,
    //   error,
    //   error.response.status,
    //   error.config
    // );
    //************************************** 5xx
    // if (error.response.status.toString().startsWith(5)) {
    //   // window.location.href = "/serverError";
    // }

    // ************************************** 404
    if (error.config && error.response && error.response.status === 404) {
      if (typeof window !== "undefined" && window.location) {
        window.location.replace("/not-found");
      }
      return Promise.reject(error);
    }

    // ************************************** 500
    if (error.config && error.response && error.response.status === 500) {
      // window.location.replace("/server-error");
      // return Promise.reject(error);
    }

    // ************************************** 401
    if (error.config && error.response && error.response.status === 401) {
      Cookies.remove("token");
      window.location.href = "/login";
      // Cookies.remove("refreshToken");
      if (tryCount === 3) {
        // const res = JSON.parse(
        //   localStorage.getItem("logForRefreshTokenExpired")
        // );
        // if (!res) {
        //   localStorage.clear();
        //   window.location = "/login";
        //   localStorage.setItem("logForRefreshTokenExpired", true);
        // }

        return Promise.reject(error);
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const form = { refresh: localStorage.getItem("refreshToken") };

      tryCount++;
      // return mainApi.post("/token/refresh/", form, config).then((response) => {
      //   // if (response.status === 200 || response.status === 201) {
      //   //   localStorage.setItem("tokenAccess", response.data.access);
      //   //   error.config.headers.Authorization = "Bearer " + response.data.access;
      //   //   return mainApi.request(error.config);
      //   // }
      // });
      // .catch((error) => {
      //   if (error.response && error.response.status === 401) {
      //     // localStorage.clear();
      //     // window.location = '/login';
      //     console.log(tryCount);
      //   }
      //   return Promise.reject(error);
      // });
    }

    return Promise.reject(error);
  }
);
