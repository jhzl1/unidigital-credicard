import { Formik } from "formik";
import { Form, Input, SubmitButton, Select } from "formik-antd";
import {
  initialValues,
  validationSearchByControl,
} from "../data/dataSearchByControl";
import { useEffect, useState } from "react";
import { useGetHttp } from "../hooks/useGetHttp";

const FormSearchByControl = ({ handleSubmit }) => {
  const [company] = useGetHttp("/companies/list");
  const [disabled, setDisabled] = useState(true);
  const { Option } = Select;

  useEffect(() => {
    if (company.length !== 0) {
      setDisabled(false);
    }
  }, [company]);

  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSearchByControl}
        onSubmit={(data, { resetForm }) => handleSubmit(data, { resetForm })}
      >
        <Form className="d-flex form pt-3 px-2 flex-wrap">
          <Form.Item name="CompanyStrongId" className="w-25 input me-2">
            <Select
              name="CompanyStrongId"
              placeholder="Seleccione una empresa"
              disabled={disabled}
              loading={disabled}
            >
              {company.map((item) => (
                <Option value={item.strongId} key={item.strongId}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="Number"
            className="w-25 input me-2"
            disabled={disabled}
          >
            <Input
              name="Number"
              placeholder="Introduzca número de control"
              disabled={disabled}
            />
          </Form.Item>

          <SubmitButton className="me-3 input mb-3" disabled={disabled}>
            Buscar
          </SubmitButton>
        </Form>
      </Formik>
    </>
  );
};

export default FormSearchByControl;
