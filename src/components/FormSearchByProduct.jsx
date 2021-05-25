import { DatePicker, Select, Form } from "formik-antd";
import { useState } from "react";
import { dataSearchByNumber, typeOfDocument } from "../data/data";
import { Formik } from "formik";
import { validationSearchByProduct } from "../data/dataSearchByProduct";
import { Button } from "antd";

const FormSearchByProduct = ({ handleSubmit }) => {
  const [data, setData] = useState({
    companies: null,
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

  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={data}
        validationSchema={validationSearchByProduct}
        onSubmit={() => handleSubmit(data)}
      >
        <Form className="d-flex">
          <Form.Item name="companies" className="w-25 me-2">
            <Select
              name="companies"
              placeholder="Seleccione una empresa"
              onChange={(value) => handleChangeData("companies", value)}
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

          <Button type="primary" htmlType="submit">
            Buscar
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default FormSearchByProduct;
