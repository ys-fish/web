import { get } from "../utils/axios-request";

export const TagfinfaAllApi = async (id: number) => {
  const { data } = await get(`tags/${id}`);
  return data;
};

export const findAllWebApi = async (id: number) => {
  const { data } = await get(`/tags/webs/${id}`);
  return data;
};
