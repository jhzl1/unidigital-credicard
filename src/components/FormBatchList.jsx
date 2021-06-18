import { Formik } from "formik";
import { Form, Input, SubmitButton, Select } from "formik-antd";
import { useState, useEffect } from "react";
import { initialValues, validationBatchList } from "../data/dataBatchList";
import { useGetHttp } from "../hooks/useGetHttp";

const FormBatchList = ({ handleSubmit }) => {
  const { Option } = Select;
  const [company] = useGetHttp("/companies/list");
  const [disabled, setDisabled] = useState(true);

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
        validationSchema={validationBatchList}
        onSubmit={handleSubmit}
      >
        <Form className="d-flex form pt-3 px-2">
          <Form.Item name="CompanyStrongId" className="w-25 me-2">
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

          <Form.Item name="Number" className="w-25 me-2">
            <Input
              name="Number"
              placeholder="Introduzca número de control"
              disabled={disabled}
              maxLength={10}
            />
          </Form.Item>

          <SubmitButton className="me-3" disabled={disabled}>
            Buscar
          </SubmitButton>
        </Form>
      </Formik>
    </>
  );
};

export default FormBatchList;
