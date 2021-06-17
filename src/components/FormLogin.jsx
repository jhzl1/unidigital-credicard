import { Formik } from "formik";
import { Form, Input, SubmitButton, Select } from "formik-antd";
import { initialValuesLogin, validationLogin } from "../data/dataFormLogin";

const FormLogin = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValuesLogin}
      validationSchema={validationLogin}
      onSubmit={(data) => handleSubmit(data)}
    >
      <Form className="my-4 d-flex flex-column justify-content-center">
        <Form.Item name="UserName" placeholder="Ingrese su correo">
          <Input name="UserName" id="UserName" />
        </Form.Item>
        <Form.Item name="Password" placeholder="Ingrese su correo">
          <Input.Password name="Password" />
        </Form.Item>

        {/* <Form.Item name="remember" valuePropName="checked">
          <Checkbox className="checkbox">Recuérdame</Checkbox>
        </Form.Item> */}

        <SubmitButton>Iniciar sesión</SubmitButton>
      </Form>
    </Formik>
  );
};

export default FormLogin;
