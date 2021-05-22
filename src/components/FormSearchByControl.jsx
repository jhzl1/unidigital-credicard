import { dataSearchByNumber } from "../data/data";
import { Formik, Form as FormFormik } from "formik";
import { Form, Input, SubmitButton, Select } from "formik-antd";
import { validationSearchByControl } from "../data/dataSearchByControl";

const FormSearchByControl = ({ handleSubmit }) => {
  const { Option } = Select;
  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={{
          bussines: "",
          numberControl: "",
        }}
        validationSchema={validationSearchByControl}
        onSubmit={(data, { resetForm }) => handleSubmit(data, { resetForm })}
      >
        <FormFormik className=" d-flex">
          <Form.Item name="bussines" className="w-25 me-2">
            <Select name="bussines" placeholder="Seleccione una empresa">
              {dataSearchByNumber.map((item, index) => (
                <Option value={item.value} key={index}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="numberControl" className="w-25 me-2">
            <Input
              name="numberControl"
              placeholder="Introduzca número de Control"
            />
          </Form.Item>

          <SubmitButton className="me-3">Buscar</SubmitButton>
        </FormFormik>
      </Formik>
    </>
  );
};

export default FormSearchByControl;
