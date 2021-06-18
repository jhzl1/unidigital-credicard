import { Form, Input, SubmitButton, Select } from "formik-antd";
import { Formik } from "formik";
import {
  initialValues,
  validationSearchByDocNumber,
} from "../data/dataFormSearchByDocNumber";
import { useEffect, useState } from "react";
import { useGetHttp } from "../hooks/useGetHttp";

const { Option } = Select;

const FormSearchByDocNumber = ({ handleSubmit }) => {
  const [company] = useGetHttp("/companies/list");
  const [product] = useGetHttp("/products/list");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (company.length !== 0 && product.length !== 0) {
      setDisabled(false);
    }
  }, [company, product]);

  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSearchByDocNumber}
        onSubmit={(data, { resetForm }) => handleSubmit(data, { resetForm })}
      >
        <Form className="d-flex form pt-3 px-2">
          <Form.Item name="CompanyStrongId" className="w-25 input me-2">
            <Select
              name="CompanyStrongId"
              placeholder="Seleccione una empresa"
              loading={disabled}
              disabled={disabled}
            >
              {company.map((item) => (
                <Option value={item.strongId} key={item.strongId}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="ProductStrongId" className="w-25 input me-2">
            <Select
              name="ProductStrongId"
              placeholder="Seleccione un tipo de documento"
              loading={disabled}
              disabled={disabled}
            >
              {product.map((item) => (
                <Option value={item.strongId} key={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="Number" className="w-25 input me-2">
            <Input
              name="Number"
              placeholder="Introduzca número de documento"
              disabled={disabled}
            />
          </Form.Item>

          <SubmitButton className="me-3 mb-3 input" disabled={disabled}>
            Buscar
          </SubmitButton>
        </Form>
      </Formik>
    </>
  );
};

export default FormSearchByDocNumber;
