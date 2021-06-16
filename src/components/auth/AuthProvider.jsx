import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { message } from "antd";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("jwt") || ""
  );

  const baseUrl =
    "https://demo.unidigital.global/CredicardDigitalInvoiceServices/api";

  useEffect(() => {
    try {
      localStorage.setItem("jwt", isAuthenticated);
    } catch (error) {
      localStorage.removeItem("user");
    }
  }, [isAuthenticated]);

  const contextValue = {
    isAuthenticated,
    async login(user) {
      try {
        const res = await axios.post(`${baseUrl}/user/login`, user);
        console.log(res);
        localStorage.setItem("jwt", res.data.accessToken);
      } catch (error) {
        if (
          error.response.data.errors[0].message ===
          "Las credenciales son incorrectas, por favor verifique"
        ) {
          message.error(error.response.data.errors[0].message);
        }
      }
      setIsAuthenticated(localStorage.getItem("jwt"));
    },
    logout() {
      setIsAuthenticated("");
      localStorage.removeItem("jwt");
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
