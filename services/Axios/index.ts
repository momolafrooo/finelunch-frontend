import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const Axios = axios.create({
  baseURL: "http://localhost:9000/api/",
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + Cookies.get("token"),
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
Axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
Axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    toast.error(error?.response?.data?.error?.message);
    console.log(error?.response?.data?.error?.message);

    return Promise.reject(error);
  }
);
