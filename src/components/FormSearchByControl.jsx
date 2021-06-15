import { Formik } from "formik";
import { Form, Input, SubmitButton, Select } from "formik-antd";
import {
  initialValues,
  validationSearchByControl,
} from "../data/dataSearchByControl";
import { useEffect, useState } from "react";
import { getData } from "../services/api";

const FormSearchByControl = ({ handleSubmit }) => {
  const [company, setCompany] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const { Option } = Select;

  const getParameters = async () => {
    setDisabled(true);

    const getCompanies = await getData("/companies/list");

    localStorage.setItem("companiesList", JSON.stringify(getCompanies));

    setCompany(getCompanies.data.companies);

    setDisabled(false);
  };

  useEffect(() => {
    if (localStorage.getItem("companiesList")) {
      setCompany(JSON.parse(localStorage.getItem("companiesList")));
    } else {
      getParameters();
    }
  }, []);

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
