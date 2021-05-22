import { Form, Input, SubmitButton, Select } from "formik-antd";
import { dataSearchByNumber } from "../data/data";
import { Formik, Form as FormFormik } from "formik";
import { validationSearchByDocNumber } from "../data/dataFormSearchByDocNumber";

const FormSearchByDocNumber = ({ handleSubmit }) => {
  const { Option } = Select;

  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={{
          bussines: "",
          numberDocument: "",
        }}
        validationSchema={validationSearchByDocNumber}
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
          <Form.Item name="numberDocument" className="w-25 me-2">
            <Input
              name="numberDocument"
              placeholder="Introduzca número de documento"
            />
          </Form.Item>

          <SubmitButton className="me-3">Buscar</SubmitButton>
        </FormFormik>
      </Formik>
    </>
  );
};

export default FormSearchByDocNumber;
