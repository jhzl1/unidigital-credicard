import { baseUrl, sessionToken } from "./api";
import axios from "axios";

export async function getDocument(strongId) {
  try {
    const response = await axios.get(`${baseUrl}/documents/view/${strongId}`, {
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    });
    window.open(response.data.url, "_blank");
    return response;
  } catch (e) {
    console.log(e);
  }
}
