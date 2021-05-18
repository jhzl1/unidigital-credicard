import UnidigitalLogo from "../assets/img/unidigital_logo.png";
import { useHistory } from "react-router";
import { Input, Form, Checkbox, Button } from "antd";

const Login = () => {
  const history = useHistory();
  const handleSubmit = () => {
    console.log("sirve");
    history.push("/desktop");
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
          <Form
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmit}
            className="my-4 d-flex flex-column justify-content-center"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su usuario",
                },
              ]}
            >
              <Input placeholder="Usuario" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su contraseña",
                },
              ]}
            >
              <Input.Password placeholder="Contraseña" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox className="checkbox">Recuérdame</Checkbox>
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Iniciar sesión
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
