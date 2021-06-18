import { DatePicker, Select, Form } from "formik-antd";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import { validationSearchByProduct } from "../data/dataSearchByProduct";
import { Button } from "antd";
import { useGetHttp } from "../hooks/useGetHttp";

const FormSearchByProduct = ({ handleSubmit }) => {
  const [data, setData] = useState({
    CompanyStrongId: null,
    ProductStrongId: null,
    dateFrom: null,
    dateTo: null,
  });
  const [company] = useGetHttp("/companies/list");
  const [product] = useGetHttp("/products/list");
  const [disabled, setDisabled] = useState(true);

  const { Option } = Select;

  const handleChangeData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  useEffect(() => {
    if (company.length !== 0 && product.length !== 0) {
      setDisabled(false);
    }
  }, [company, product]);

  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={data}
        validationSchema={validationSearchByProduct}
        onSubmit={() => handleSubmit(data)}
      >
        <Form className="d-flex form pt-3 px-2 justify-content-center flex-wrap w-100">
          <Form.Item name="CompanyStrongId" className="input me-2">
            <Select
              name="CompanyStrongId"
              placeholder="Seleccione una empresa"
              onChange={(value) => handleChangeData("CompanyStrongId", value)}
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
          <Form.Item name="ProductStrongId" className="input me-2">
            <Select
              name="ProductStrongId"
              placeholder="Seleccione Tipo de Documento"
              onChange={(value) => handleChangeData("ProductStrongId", value)}
              loading={disabled}
              disabled={disabled}
            >
              {product.map((item) => (
                <Option value={item.strongId} key={item.strongId}>
                  {item.name}
                </Option>
              ))}
            </Select>
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

          <Button type="primary" htmlType="submit" disabled={disabled}>
            Buscar
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default FormSearchByProduct;
