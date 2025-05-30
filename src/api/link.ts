import { get, post } from "../utils/axios-request";
import { Link } from "../utils/DTO/link.dto";

export const linkCreateApi = async (body: Link | Link[]) => {
  const data = await post("/links", body);
  return data?.data;
};

export const LinkFindApi = async () => {
  const { data } = await get("/links");
  return data;
};

export const LinkFindByApi = async (id: string) => {
  const { data } = await get(`/links/search/${id}`);
  return data;
};

export const LinkDeleteApi = async (id: string) => {
  const { data } = await get(`/links/delete/${id}`);
  return data;
};

export const linkPublickApi = async () => {
  const { data } = await get("links/public");
  return data;
};
export const linkApplyForApi = async (id: number) => {
  const data = await post("/links/applyFor", { id: id });
  return data?.data;
};
