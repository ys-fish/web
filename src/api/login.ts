/*
 * @Author: mikey.zhaopeng
 * @Date: 2023-03-17 22:28:12
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2023-03-21 15:28:04
 */

import { get, post } from "../utils/axios-request";

export const registerApi = async (body: object) => {
  const register = await post("/users/register", body);
  return register?.data;
};

export const loginApi = async (body: object) => {
  const login = await post("/users/login", body);
  return login?.data;
};

export const userinfoApi = async () => {
  const { data } = await get("/users/userinfo");
  return data;
};
