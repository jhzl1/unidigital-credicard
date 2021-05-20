import { useState } from "react";
import { Cascader, InputNumber, Table } from "antd";
import {
  dataSearchByNumber,
  columnsSearchByNumber,
  dataExample,
} from "../data/data";
import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchByDocNumber from "./BreadcrumbSearchByDocNumber";

const SearchNumberDoc = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(true);
  const submitSearchByDocNumber = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="my-5 p-4 desktop-container" fluid>
      <Row>
        <Col>
          <BreadcrumbSearchByDocNumber />
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
          {isDataLoaded ? (
            <Table
              columns={columnsSearchByNumber}
              dataSource={dataExample}
              className="mt-4 table"
              scroll={{ x: "max-content" }}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchNumberDoc;
