import { get } from "../utils/axios-request";

export const specialFindApi = async () => {
  const { data } = await get("/specials");
  return data;
};
