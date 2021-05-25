import { Input, Form, Checkbox, Button } from "antd";

const FormLogin = ({ handleSubmit }) => {
  return (
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
  );
};

export default FormLogin;
