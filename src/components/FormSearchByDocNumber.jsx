import { Form, Input, SubmitButton, Select } from "formik-antd";
import { Formik, Form as FormFormik } from "formik";
import { validationSearchByDocNumber } from "../data/dataFormSearchByDocNumber";
import { useEffect, useState } from "react";
import { getData } from "../services/api";

const { Option } = Select;

const FormSearchByDocNumber = ({ handleSubmit }) => {
  const [company, setCompany] = useState([]);
  const [product, setProduct] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const response = async () => {
    setDisabled(true);
    const getProducts = await getData("/products/list");
    setProduct(getProducts.data.products);
    const getCompany = await getData("/companies/list");
    setCompany(getCompany.data.companies);
    setDisabled(false);
  };
  useEffect(() => {
    response();
  }, []);

  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={{
          Number: "",
          CompanyStrongId: "",
          ProductStrongId: "",
        }}
        validationSchema={validationSearchByDocNumber}
        onSubmit={(data, { resetForm }) => handleSubmit(data, { resetForm })}
      >
        <FormFormik className=" d-flex">
          <Form.Item name="CompanyStrongId" className="w-25 me-2">
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
          <Form.Item name="ProductStrongId" className="w-25 me-2">
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
          <Form.Item name="Number" className="w-25 me-2">
            <Input name="Number" placeholder="Introduzca número de documento" />
          </Form.Item>

          <SubmitButton className="me-3" disabled={disabled}>
            Buscar
          </SubmitButton>
        </FormFormik>
      </Formik>
    </>
  );
};

export default FormSearchByDocNumber;
