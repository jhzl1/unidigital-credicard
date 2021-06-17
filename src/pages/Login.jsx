import LogoSvg from "../components/LogoSvg";
import { Redirect } from "react-router";
import FormLogin from "../components/FormLogin";
import { motion } from "framer-motion";
import { loginVariants } from "../data/dataAnimation";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const auth = useAuth();

  const handleSubmit = async (user) => {
    await auth.login(user);
  };

  if (auth.isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="general-login">
      <motion.div
        className=" login d-flex flex-row flex-wrap"
        variants={loginVariants}
        initial="initial"
        animate="show"
      >
        <div className="d-flex flex-fill justify-content-center align-items-center container-login-left">
          <LogoSvg widthProp="90px" />
        </div>
        <div
          className="d-flex flex-column flex-fill p-3 align-items-center"
          id="container-login"
        >
          <h3 className="mt-4">Suite Documental</h3>

          <FormLogin handleSubmit={handleSubmit} />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
