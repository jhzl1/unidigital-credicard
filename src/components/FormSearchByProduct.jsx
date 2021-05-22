import { DatePicker, Select, Form, SubmitButton } from "formik-antd";
import { useCallback, useState } from "react";
import { dataSearchByNumber, typeOfDocument } from "../data/data";
import { Formik } from "formik";
import { validationSearchByProduct } from "../data/dataSearchByProduct";

const FormSearchByProduct = ({ handleSubmit }) => {
  const [data, setData] = useState({
    bussiness: null,
    typeOfDocument: null,
    dateFrom: null,
    dateTo: null,
  });

  const { Option } = Select;

  const handleChangeData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const preSubmit = useCallback(
    (data, { resetForm }) => {
      handleSubmit(data);
      setTimeout(() => {
        resetForm();
      }, 2000);
    },
    [handleSubmit]
  );
  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={data}
        validationSchema={validationSearchByProduct}
        onSubmit={preSubmit}
      >
        <Form className="d-flex">
          <Form.Item name="bussiness" className="w-25 me-2">
            <Select
              name="bussiness"
              placeholder="Seleccione una empresa"
              onChange={(value) => handleChangeData("bussiness", value)}
            >
              {dataSearchByNumber.map((item, index) => (
                <Option value={item.value} key={index}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="typeOfDocument" className="w-25 me-2">
            <Select
              name="typeOfDocument"
              placeholder="Seleccione Tipo de Documento"
              onChange={(value) => handleChangeData("typeOfDocument", value)}
            >
              {typeOfDocument.map((item, index) => (
                <Option value={item.value} key={index}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="dateFrom" className="w-25 me-2">
            <DatePicker
              name="dateFrom"
              placeholder="Fecha emisión (Desde)"
              className="me-3 w-100"
              format="DD-MM-YYYY"
              onChange={(date, dateString) =>
                handleChangeData("dateFrom", dateString)
              }
            />
          </Form.Item>
          <Form.Item name="dateTo" className="w-25 me-2">
            <DatePicker
              name="dateTo"
              placeholder="Fecha emisión (Hasta)"
              className="me-3 w-100"
              format="DD-MM-YYYY"
              onChange={(date, dateString) =>
                handleChangeData("dateTo", dateString)
              }
            />
          </Form.Item>

          <SubmitButton>Buscar</SubmitButton>
        </Form>
      </Formik>
    </>
  );
};

export default FormSearchByProduct;
