import { Formik } from "formik";
import { validationSearchByFiscalRegistry } from "../data/dataSearchByFiscalRegistry";
import { Form, Input, Select, DatePicker, SubmitButton } from "formik-antd";
import locale from "antd/lib/locale/es_ES";
import { ConfigProvider } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useGetHttp } from "../hooks/useGetHttp";
import { SearchOutlined } from "@ant-design/icons";

const FormSearchByFiscalRegistry = ({ handleSubmit }) => {
  const [data, setData] = useState({
    CompanyStrongId: null,
    FiscalRegistry: null,
    // dateFrom: null,
    // dateTo: null,
  });

  const [company] = useGetHttp("/companies/list");

  const [disabled, setDisabled] = useState(true);

  const handleChangeData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const { Option } = Select;

  useEffect(() => {
    if (company.length !== 0) {
      setDisabled(false);
    }
  }, [company]);

  return (
    <ConfigProvider locale={locale}>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={data}
        validationSchema={validationSearchByFiscalRegistry}
        onSubmit={() => handleSubmit(data)}
      >
        <Form className="d-flex form pt-3 px-2 justify-content-center flex-wrap">
          <Form.Item name="CompanyStrongId" className="input me-2">
            <Select
              name="CompanyStrongId"
              placeholder="Seleccione una empresa"
              onChange={(value) => handleChangeData("CompanyStrongId", value)}
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
          <Form.Item name="FiscalRegistry" className="input me-2">
            <Input
              name="FiscalRegistry"
              placeholder="Introduzca RIF o Cédula"
              disabled={disabled}
              onChange={(e) =>
                handleChangeData("FiscalRegistry", e.target.value)
              }
            />
          </Form.Item>

          <Form.Item name="dateFrom" className="input me-2">
            <DatePicker
              name="dateFrom"
              placeholder="Fecha emisión (Desde)"
              className="me-3 w-100"
              format="DD-MM-YYYY"
              disabled={disabled}
              onChange={(date, dateString) =>
                handleChangeData("dateFrom", dateString)
              }
            />
          </Form.Item>
          <Form.Item name="dateTo" className="input me-2">
            <DatePicker
              name="dateTo"
              placeholder="Fecha emisión (Hasta)"
              className="me-3 w-100"
              format="DD-MM-YYYY"
              disabled={disabled}
              onChange={(date, dateString) =>
                handleChangeData("dateTo", dateString)
              }
            />
          </Form.Item>

          <SubmitButton className="me-2 button-input mb-3" disabled={disabled}>
            <SearchOutlined /> Buscar
          </SubmitButton>
        </Form>
      </Formik>
    </ConfigProvider>
  );
};

export default FormSearchByFiscalRegistry;
