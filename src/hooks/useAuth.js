import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthProvider";

const useAuth = () => {
  const contextValue = useContext(AuthContext);
  return contextValue;
};

export default useAuth;
