import LogoSvg from "../components/LogoSvg";
import { useHistory } from "react-router";
import FormLogin from "../components/FormLogin";
import { loginApi } from "../services/api";
import { motion } from "framer-motion";
import { loginVariants } from "../data/dataAnimation";

const Login = () => {
  const history = useHistory();
  const handleSubmit = async () => {
    await loginApi();
    history.push("/home");
  };

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
