import axios from "axios";

const baseUrl =
  "https://demo.unidigital.global/CredicardDigitalInvoiceServices/api";

/* const httpInstance = axios.create({
  baseURL: "https://demo.unidigital.global/CredicardDigitalInvoiceServices/api",
}); */

export default axios.create({
  baseURL: "https://demo.unidigital.global/CredicardDigitalInvoiceServices/api",
});

const credicard_facturacion_jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImNyZWRpY2FyZF9kaWdpdGFsaW52b2ljZUB1bmlkaWdpdGFsLmdsb2JhbCIsIm5iZiI6MTYyMTY2MjUwNCwiZXhwIjoxNjIxNjY0MzA0LCJpYXQiOjE2MjE2NjI1MDQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzM1LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzM1LyJ9.mlqoXYiKJOmaQmaBYpr41Qp68JbC4QQjhag5dkHpjYQ";

const datados = {
  userName: "credicard_digitalinvoice@unidigital.global",
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImNyZWRpY2FyZF9kaWdpdGFsaW52b2ljZUB1bmlkaWdpdGFsLmdsb2JhbCIsIm5iZiI6MTYyMTY2MjA2NiwiZXhwIjoxNjIxNjYzODY2LCJpYXQiOjE2MjE2NjIwNjYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzM1LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzM1LyJ9.kE4xznOMqhNrJM-slUSeDHV3akCvyHea6E4a4mZrkxQ",
  refreshToken: "",
  errors: [],
  success: [],
  warning: [],
  information: [],
  hasErrors: false,
};

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = credicard_facturacion_jwt;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getData = async () => {
  await axios
    .get(`${baseUrl}/products/list`)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
