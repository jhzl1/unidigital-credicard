import axios from "axios";
import jwt_decode from "jwt-decode";

const user = {
  UserName: "credicard_digitalinvoice@unidigital.global",
  Password: "MHk8YaR2xrsfu",
};

const baseUrl =
  "https://demo.unidigital.global/CredicardDigitalInvoiceServices/api";

export const loginApi = async () => {
  await axios
    .post(`${baseUrl}/user/login`, user)
    .then((response) => {
      localStorage.setItem("jwt", response.data.accessToken);
      console.log(response);
      return response;
    })
    .catch((error) => console.log(error));
};

const sessionToken = localStorage.getItem("jwt");
/* const decode = jwt_decode(sessionToken);
const timeExpiration = decode.exp;
const dateNow = new Date().getTime();
let sumDates = timeExpiration - dateNow;
const prnrirn = new Date(sumDates).getMinutes();
const chiave = prnrirn * 60000;
console.log(chiave);

setTimeout(() => {
  loginApi();
}, chiave - 10000); 
 */
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

export async function sendData(url, data) {
  const config = {
    method: "get",
    url: "https://demo.unidigital.global/CredicardDigitalInvoiceServices/api/documents/searchbynumber",
    headers: {
      Authorization: `Bearer ${sessionToken}`,
      "Content-Type": "application/json",
    },
  };
  console.log(data);
  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
