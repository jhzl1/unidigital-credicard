import { useState, useEffect } from "react";
import { getData } from "../services/api";

export const useGetHttp = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getParameters = async () => {
      const processData = await getData(url);
      console.log(processData);
      if (url === "/products/list") {
        localStorage.setItem(
          "products",
          JSON.stringify(processData.data.products)
        );
      } else if (url === "/companies/list") {
        localStorage.setItem(
          "companiesList",
          JSON.stringify(processData.data.companies)
        );
      } else {
        console.log("Configure nueva condición");
      }
    };
    // ----------------------------------------------------------------------
    if (localStorage.getItem("products") && url === "/products/list") {
      setData(JSON.parse(localStorage.getItem("products")));
    } else if (
      localStorage.getItem("companiesList") &&
      url === "/companies/list"
    ) {
      setData(JSON.parse(localStorage.getItem("companiesList")));
    } else {
      getParameters();
    }
  }, [url]);

  return [data];
};
