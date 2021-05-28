import { DatePicker, Select, Form } from "formik-antd";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import { validationSearchByProduct } from "../data/dataSearchByProduct";
import { Button } from "antd";
import { getData } from "../services/api";

const FormSearchByProduct = ({ handleSubmit }) => {
  const [data, setData] = useState({
    CompanyStrongId: null,
    ProductStrongId: null,
    dateFrom: null,
    dateTo: null,
  });
  const [company, setCompany] = useState([]);
  const [product, setProduct] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const { Option } = Select;

  const handleChangeData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const getParameters = async () => {
    setDisabled(true);
    const getProducts = await getData("/products/list");

    localStorage.setItem("products", JSON.stringify(getProducts.data.products));

    setProduct(getProducts.data.products);

    const getCompany = await getData("/companies/list");
    localStorage.setItem(
      "companiesList",
      JSON.stringify(getCompany.data.companies)
    );

    setCompany(getCompany.data.companies);

    setDisabled(false);
  };

  useEffect(() => {
    if (
      localStorage.getItem("companiesList") &&
      localStorage.getItem("products")
    ) {
      setCompany(JSON.parse(localStorage.getItem("companiesList")));
      setProduct(JSON.parse(localStorage.getItem("products")));
    } else {
      getParameters();
    }
  }, []);

  return (
    <>
      <h4>Parámetros de búsqueda</h4>
      <Formik
        initialValues={data}
        validationSchema={validationSearchByProduct}
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
          <Form.Item name="ProductStrongId" className="w-25 me-2">
            <Select
              name="ProductStrongId"
              placeholder="Seleccione Tipo de Documento"
              onChange={(value) => handleChangeData("ProductStrongId", value)}
              disabled={disabled}
            >
              {product.map((item) => (
                <Option value={item.strongId} key={item.strongId}>
                  {item.name}
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
