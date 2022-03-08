import axios from "axios";
import { API_KEY } from "../config/api-key";

export const http = axios.create({
    baseURL: "https://api.clashroyale.com/v1",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
  });