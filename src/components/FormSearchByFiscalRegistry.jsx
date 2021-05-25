import { dataSearchByNumber } from "../data/data";
import { Formik } from "formik";
import { validationSearchByFiscalRegistry } from "../data/dataSearchByFiscalRegistry";
import { Form, Input, Select, DatePicker } from "formik-antd";
import locale from "antd/lib/locale/es_ES";
import { ConfigProvider, Button } from "antd";
import { useState } from "react";

const FormSearchByFiscalRegistry = ({ handleSubmit }) => {
  const [data, setData] = useState({
    companies: null,
    fiscalRegistry: null,
    dateFrom: null,
    dateTo: null,
  });
  const handleChangeData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const { Option } = Select;
  return (
    <ConfigProvider locale={locale}>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={data}
        validationSchema={validationSearchByFiscalRegistry}
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
          <Form.Item name="fiscalRegistry" className="w-25 me-2">
            <Input
              name="fiscalRegistry"
              placeholder="Introduzca RIF o Cédula"
              onChange={(e) =>
                handleChangeData("fiscalRegistry", e.target.value)
              }
            />
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
    </ConfigProvider>
  );
};

export default FormSearchByFiscalRegistry;
