import { post } from "../utils/axios-request";

export const uploadApi = async (body: object) => {
  const data = await post("upload", body);
  return data?.data;
};

export const searchApi = async (body: object) => {
  const data = await post("search", body);
  return data?.data;
};
