import Axios from "./axios-interceptors";

const get = async (url: string, params?: any) => {
  const data = await Axios.get(url, { params: params });
  return data.data;
};

const post = async (url: string, data?: any, headers?: any) => {
  try {
    return await Axios.post(url, data, headers);
  } catch (error: any) {}
};

export { get, post };
