/*
 * @Descripttion:
 * @version:
 * @Author: cain
 * @Date: 2022-11-09 08:44:37
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-19 10:45:31
 * @FilePath: \c_admin\src\utils\axios-interceptors.ts
 */
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { computed } from "vue";
// 124.71.13.3
// localhost
export const BASE_URL = "http://124.71.13.3:2001/api";
import router from "../router/index";
import { AutoStore } from "../store/auto";
import { cmessage } from "./message";
const Axios = axios.create({
  baseURL: BASE_URL,
});

Axios.interceptors.request.use(
  (conflg: any) => {
    const auto = AutoStore();
    const flag: any = conflg || {};
    if (auto.Token) {
      flag.headers["Authorization"] = "Bearer " + auto.Token;
    }
    return conflg;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response: any) => {
    if (response.status == 200 || response.status == 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response.status == 401) {
      router.push("/login");
      cmessage({type:'error',msg:"登陆身份失效，请重新登陆"})
    }
    return Promise.reject(error.response);
  }
);

export default Axios;
