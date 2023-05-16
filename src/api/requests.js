import {API_KEY} from "@env"
import axios from "axios"

const instance = axios.create({
  baseURL: "https://newsapi.org",
  headers: {'X-API-KEY': API_KEY}
});

export const GET_NEWS  = async () => {
    try{
        const RESPONSE = await instance.get("/v2/top-headlines?country=us")
        return RESPONSE.data
    }catch(err){
        console.log(err);
        return err  ? err?.code : err
    }
}
