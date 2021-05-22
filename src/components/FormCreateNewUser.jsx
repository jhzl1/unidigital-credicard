import { Formik, Form as FormFormik } from "formik";
import { Form, Input, ResetButton, SubmitButton, Select } from "formik-antd";
import {
  gruopsUser,
  initialValues,
  validationSchema,
} from "../data/createUser";
import { useCallback } from "react";
import { message } from "antd";

const FormCreateNewUser = () => {
  const { Option } = Select;

  const handleSubmit = useCallback(async (data, { resetForm }) => {
    setTimeout(() => {
      try {
        message.success("El usuario ha sido creado exitosamente");
        resetForm();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }, 2000);
  }, []);

  return (
    <div>
      <h4>Crear nuevo usuario</h4>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormFormik>
          <Form.Item name="email">
            <Input name="email" placeholder="Ingrese un correo" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              name="password"
              placeholder="Ingrese una contraseña"
            />
          </Form.Item>
          <Form.Item name="repeatPassword">
            <Input.Password
              name="repeatPassword"
              placeholder="Repita la contraseña"
            />
          </Form.Item>
          <Form.Item name="name">
            <Input name="name" placeholder="Ingrese nombre" />
          </Form.Item>
          <Form.Item name="surname">
            <Input name="surname" placeholder="Ingrese apellido" />
          </Form.Item>

          <Form.Item name="group">
            <Select name="group" placeholder="Seleccione un grupo">
              {gruopsUser.map((item, index) => (
                <Option value={item.value} key={index}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <SubmitButton className="me-3">Crear usuario</SubmitButton>
          <ResetButton>Limpiar Campos</ResetButton>
        </FormFormik>
      </Formik>
    </div>
  );
};

export default FormCreateNewUser;
