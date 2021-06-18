import { baseUrl } from "./api";
import axios from "axios";

export async function sendData(url, data) {
  try {
    const response = await axios.post(`${baseUrl}${url}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    return response;
  } catch (e) {
    if (e.response.data.hasErrors) {
      console.log("bien");
    } else {
      console.log("mal");
    }
  }
}
