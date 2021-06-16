import { Formik } from "formik";
import { Form, Input, SubmitButton, Select } from "formik-antd";
import {
  initialValues,
  validationSearchByControl,
} from "../data/dataSearchByControl";
import { useEffect, useState } from "react";
import { useGetHttp } from "../hooks/useGetHttp";

const FormSearchByControl = ({ handleSubmit }) => {
  const [company] = useGetHttp("/documents/searchbycontrolnumber");
  const [disabled, setDisabled] = useState(true);
  const { Option } = Select;

  useEffect(() => {
    const checkCompleted = () => {
      if (company !== undefined) {
        setDisabled(false);
      }
    };
    checkCompleted();
  }, [company]);

  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSearchByControl}
        onSubmit={(data, { resetForm }) => handleSubmit(data, { resetForm })}
      >
        <Form className="d-flex form pt-3">
          <Form.Item name="CompanyStrongId" className="w-25 ms-2 me-2">
            <Select
              name="CompanyStrongId"
              placeholder="Seleccione una empresa"
              disabled={disabled}
            >
              {company.map((item) => (
                <Option value={item.strongId} key={item.strongId}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="Number" className="w-25 me-2" disabled={disabled}>
            <Input name="Number" placeholder="Introduzca número de control" />
          </Form.Item>

          <SubmitButton className="me-3">Buscar</SubmitButton>
        </Form>
      </Formik>
    </>
  );
};

export default FormSearchByControl;
