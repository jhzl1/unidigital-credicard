import { Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import { Checkbox } from "antd";
import { useState } from "react";
import { initialValuesLogin, validationLogin } from "../data/dataFormLogin";

const FormLogin = ({ handleSubmit }) => {
  const [remember, setRemember] = useState(true);

  return (
    <Formik
      initialValues={initialValuesLogin}
      validationSchema={validationLogin}
      onSubmit={(data) => handleSubmit(data)}
    >
      <Form className="my-4 d-flex flex-column justify-content-center">
        <Form.Item name="UserName">
          <Input
            name="UserName"
            id="UserName"
            placeholder="Ingrese su correo"
          />
        </Form.Item>
        <Form.Item name="Password">
          <Input.Password name="Password" placeholder="Ingrese su contraseña" />
        </Form.Item>

        <Form.Item name="remember">
          <Checkbox
            className="checkbox"
            checked={remember}
            onChange={(e) => setRemember(!remember)}
          >
            Recuérdame
          </Checkbox>
        </Form.Item>
        <SubmitButton>Iniciar sesión</SubmitButton>
      </Form>
    </Formik>
  );
};

export default FormLogin;
