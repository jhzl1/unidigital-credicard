import axios from "axios";

export const baseUrl =
  "https://demo.unidigital.global/CredicardDigitalInvoiceServices/api";

export const sessionToken = localStorage.getItem("jwt");

export async function getData(url) {
  try {
    const getToken = localStorage.getItem("jwt");
    const response = await axios.get(`${baseUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
