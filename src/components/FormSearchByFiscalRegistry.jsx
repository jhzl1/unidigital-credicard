import { dataSearchByNumber } from "../data/data";
import { Formik, Form as FormFormik } from "formik";
import {
  initialValues,
  validationSearchByFiscalRegistry,
} from "../data/dataSearchByFiscalRegistry";
import { Form, Input, SubmitButton, Select, DatePicker } from "formik-antd";
import locale from "antd/lib/locale/es_ES";
import { ConfigProvider } from "antd";
import moment from "moment";
import { DatePicker as DatePickerDefault } from "antd";
import { useState } from "react";

const FormSearchByFiscalRegistry = ({ handleSubmit }) => {
  const [dateState, setDateState] = useState("");
  const { Option } = Select;
  const dateFormat = moment().format("L");
  const handleChange = (dateString) => {
    console.log(dateString);
  };

  const preSubmit = (data) => {
    const arreglo = data.push({ fecha: dateState });
    console.log(arreglo);
  };

  function onChange(date, dateString) {
    console.log(dateString);
  }

  return (
    <ConfigProvider locale={locale}>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSearchByFiscalRegistry}
        onSubmit={preSubmit}
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
          <Form.Item name="fiscalRegistry" className="w-25 me-2">
            <Input
              name="fiscalRegistry"
              placeholder="Introduzca RIF o cédula"
            />
          </Form.Item>

          <Form.Item name="dateEmisionFrom" className="w-25 me-2">
            <DatePicker
              format="DD-MM-YYYY"
              name="dateEmisionFrom"
              placeholder="Fecha emisión (Desde)"
              className="me-3 w-100"
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item name="dateEmisionTo" className="w-25 me-2">
            <DatePicker
              name="dateEmisionTo"
              placeholder="Fecha emisión (Hasta)"
              className="me-3 w-100"
            />
          </Form.Item>

          <SubmitButton className="me-3">Buscar</SubmitButton>
        </FormFormik>
      </Formik>

      <DatePickerDefault onChange={onChange} format="DD-MM-YYYY" />
    </ConfigProvider>
  );
};

export default FormSearchByFiscalRegistry;
