import { useState } from "react";
import { Breadcrumb, Cascader, InputNumber, Table } from "antd";
import { dataSearchByNumber, columnsSearchByNumber } from "../data/data";
import { Container, Row, Col } from "react-bootstrap";

const SearchNumberDoc = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const submitSearchByDocNumber = (e) => {
    e.preventDefault();
  };

  const data = [
    {
      key: "1",
      tipe: "01",
      serie: "C",
      numberDoc: "0000002272",
      numberControl: "492093",
      date: "18/05/21",
      customer: "EL CHIVO MEÓN 1000 C.A.",
      total: "4.606.589,08",
    },
    {
      key: "2",
      tipe: "01",
      serie: "C",
      numberDoc: "0000002272",
      numberControl: "492093",
      date: "18/05/21",
      customer: "EL CHIVO MEÓN 1000 C.A.",
      total: "4.606.589,08",
    },
    {
      key: "3",
      tipe: "01",
      serie: "C",
      numberDoc: "0000002272",
      numberControl: "492093",
      date: "18/05/21",
      customer: "EL CHIVO MEÓN 1000 C.A.",
      total: "4.606.589,08",
    },
    {
      key: "4",
      tipe: "01",
      serie: "C",
      numberDoc: "0000002272",
      numberControl: "492093",
      date: "18/05/21",
      customer: "EL CHIVO MEÓN 1000 C.A.",
      total: "4.606.589,08",
    },
  ];

  return (
    <Container className="my-5 p-4 desktop-container" fluid>
      <Row>
        <Col>
          <Breadcrumb className="mb-3">
            <Breadcrumb.Item>Inicio</Breadcrumb.Item>
            <Breadcrumb.Item>Documentos</Breadcrumb.Item>
            <Breadcrumb.Item>Buscar por número de documento</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <h4>Parámetros de búsqueda</h4>
          <form className="d-flex flex-row" onSubmit={submitSearchByDocNumber}>
            <Cascader
              options={dataSearchByNumber}
              placeholder="Seleccione un empresa"
              className="me-3 input-default"
            />

            <InputNumber
              min={1}
              max={10}
              placeholder="Introduzca número de documento"
              className="me-3 input-default"
            />

            <button className="btn btn-dark btn-sm">Buscar</button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table
            columns={columnsSearchByNumber}
            dataSource={data}
            className="mt-4 table"
            scroll={{ x: "max-content" }}
            pagination={{ position: "bottomCenter" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchNumberDoc;
