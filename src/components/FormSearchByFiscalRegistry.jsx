import { Formik } from "formik";
import { validationSearchByFiscalRegistry } from "../data/dataSearchByFiscalRegistry";
import { Form, Input, Select, DatePicker } from "formik-antd";
import locale from "antd/lib/locale/es_ES";
import { ConfigProvider, Button } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../services/api";

const FormSearchByFiscalRegistry = ({ handleSubmit }) => {
  const [data, setData] = useState({
    CompanyStrongId: null,
    FiscalRegistry: null,
    dateFrom: null,
    dateTo: null,
  });

  const [company, setCompany] = useState([]);

  const [disabled, setDisabled] = useState(false);

  const handleChangeData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const { Option } = Select;

  const getParameters = async () => {
    setDisabled(true);

    const getCompany = await getData("/companies/list");
    localStorage.setItem(
      "companiesList",
      JSON.stringify(getCompany.data.companies)
    );

    setCompany(getCompany.data.companies);

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
    <ConfigProvider locale={locale}>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={data}
        validationSchema={validationSearchByFiscalRegistry}
        onSubmit={() => handleSubmit(data)}
      >
        <Form className="d-flex">
          <Form.Item name="CompanyStrongId" className="w-25 me-2">
            <Select
              name="CompanyStrongId"
              placeholder="Seleccione una empresa"
              onChange={(value) => handleChangeData("CompanyStrongId", value)}
              disabled={disabled}
            >
              {company.map((item) => (
                <Option value={item.strongId} key={item.strongId}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="FiscalRegistry" className="w-25 me-2">
            <Input
              name="FiscalRegistry"
              placeholder="Introduzca RIF o Cédula"
              onChange={(e) =>
                handleChangeData("FiscalRegistry", e.target.value)
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
