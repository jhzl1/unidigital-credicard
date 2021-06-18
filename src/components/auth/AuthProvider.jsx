import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { message } from "antd";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("jwt") || ""
  );
  const [tokenDecoded, setTokenDecoded] = useState("");

  const baseUrl =
    "https://demo.unidigital.global/CredicardDigitalInvoiceServices/api";

  // const tokenDecoded = jwt_decode(isAuthenticated);

  useEffect(() => {
    try {
      localStorage.setItem("jwt", isAuthenticated);
    } catch (error) {
      localStorage.removeItem("user");
    }
  }, [isAuthenticated]);

  const contextValue = {
    tokenDecoded,
    isAuthenticated,
    async login(user) {
      try {
        const res = await axios.post(`${baseUrl}/user/login`, user);
        setIsAuthenticated(res.data.accessToken);
        localStorage.setItem("jwt", res.data.accessToken);
      } catch (error) {
        if (
          error.response.data.errors[0].message ===
          "Las credenciales son incorrectas, por favor verifique"
        ) {
          message.error(error.response.data.errors[0].message);
        }
      }
    },
    logout() {
      setIsAuthenticated("");
      localStorage.removeItem("jwt");
      localStorage.removeItem("companies");
      localStorage.removeItem("products");
    },
    isLogged() {
      return !!isAuthenticated;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
