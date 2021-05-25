import axios from "axios";

export const baseUrl =
  "https://demo.unidigital.global/CredicardDigitalInvoiceServices/api";

export const httpInstance = axios.create({
  baseURL: "https://demo.unidigital.global/CredicardDigitalInvoiceServices/api",
});

export const loginApi = async (url) => {
  console.log("paso por aqui");
  await axios
    .post(`${baseUrl}${url}`, {
      UserName: "credicard_digitalinvoice@unidigital.global",
      Password: "MHk8YaR2xrsfu",
    })
    .then((response) => localStorage.setItem("jwt", response.data.accessToken))
    .catch((error) => console.log(error));
};

const sessionToken = localStorage.getItem("jwt");

export async function getData(url) {
  try {
    const response = await axios.get(`${baseUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

/* export async function sendData(url, data) {
  try {
    const dataEnviada = await axios.get(`${baseUrl}${url}`, {
      headers: {
        Authorization: `Bearer ${sessionToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    });
    return dataEnviada;
  } catch (error) {
    console.log(error);
  }
} */

export async function sendData(data) {
  var config = {
    method: "get",
    url: "https://demo.unidigital.global/CredicardDigitalInvoiceServices/api/documents/searchbynumber",
    headers: {
      Authorization: `Bearer ${sessionToken}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
