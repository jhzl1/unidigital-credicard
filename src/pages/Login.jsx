import UnidigitalLogo from "../assets/img/unidigital_logo.png";
import { useHistory } from "react-router";
import FormLogin from "../components/FormLogin";
import { loginApi } from "../services/api";

const Login = () => {
  const history = useHistory();
  const handleSubmit = async () => {
    await loginApi();
    history.push("/home");
  };

  return (
    <div className="general-login">
      <div className=" login d-flex flex-row flex-wrap">
        <div className="d-flex flex-fill justify-content-center align-items-center ">
          <img
            src={UnidigitalLogo}
            alt="Unidigital"
            className="logo-login my-4"
          />
        </div>
        <div
          className="d-flex flex-column flex-fill p-3 align-items-center"
          id="container-login"
        >
          <h3 className="mt-4">Suite Documental</h3>

          <FormLogin handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Login;
