import { get, post } from "../utils/axios-request";
import { Web } from "../utils/DTO/web.dto";

export const webCreateApi = async (body: Web | Web[]) => {
  const data = await post("/webs", body);
  return data?.data;
};
export const webRetrieveApi = async (id: string) => {
  const { data } = await get(`/webs/${id}`);
  return data;
};

export const webRetrieveUserApi = async (id: string) => {
  const { data } = await get(`/webs/retrieve/${id}`);
  return data;
};

export const webDeleteApi = async (id: string) => {
  const { data } = await get(`/webs/delete/${id}`);
  return data;
};

export const findallApi = async () => {
  const { data } = await get("/webs");
  return data;
};

