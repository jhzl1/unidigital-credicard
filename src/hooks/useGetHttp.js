import { useState, useEffect } from "react";
import { getData } from "../services/api";

export const useGetHttp = (url) => {
  const [data, setData] = useState([]);

  const products = localStorage.getItem("products");
  const companies = localStorage.getItem("companies");

  useEffect(() => {
    const getParameters = async () => {
      const processData = await getData(url);
      if (url === "/products/list") {
        localStorage.setItem(
          "products",
          JSON.stringify(processData.data.products)
        );
        setData(processData.data.products);
      } else if (url === "/companies/list") {
        localStorage.setItem(
          "companies",
          JSON.stringify(processData.data.companies)
        );
        setData(processData.data.companies);
      } else {
        console.log("Configure nueva condición");
      }
    };
    // ----------------------------------------------------------------------

    if (!products && !companies) {
      getParameters();
      return;
    } else if (!!products && url === "/products/list") {
      setData(JSON.parse(products));
      return;
    } else if (!!companies && url === "/companies/list") {
      setData(JSON.parse(companies));
      return;
    } else if (!!companies && url === "/documents/searchbycontrolnumber") {
      setData(JSON.parse(companies));
    }
  }, [url, products, companies]);

  return [data];
};
