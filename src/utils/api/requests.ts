import { API_KEY } from "@env";
import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: "https://newsapi.org",
  headers: { "X-API-KEY": API_KEY },
  
});

export const GET_TRENDING_TOPICS = async () => {
  try {
    const RESPONSE = await instance.get(
      "/v2/top-headlines?pageSize=10&country=us"
    );
    return RESPONSE.data;
  } catch (err) {
    let error = err as AxiosError;
    console.log(error?.response?.data);
    return error?.response?.data || error.message;
  }
};

export const GET_NEWS_BY_CHANNEL = async (channel: string) => {
  try {
    const RESPONSE = await instance.get("/v2/top-headlines?sources=" + channel);
    return RESPONSE.data;
  } catch (err) {
    console.log(err);
    let error = err as AxiosError;
    console.log(error?.response?.data);
    return error?.response?.data || error.message;
  }
};

export const GET_CATEGORY_BY_NAME = async (categoryName: string) => {
  try {
    const RESPONSE = await instance.get(
      `/v2/everything?pageSize=50&q=${categoryName}`
    );
    return RESPONSE.data;
  } catch (err) {
    let error = err as AxiosError;
    console.log(error?.response?.data);
    return error?.response?.data || error.message;
  }
};
