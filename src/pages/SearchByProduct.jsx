import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchByProduct from "../components/BreadcrumbSearchByProduct";
import FormSearchByProduct from "../components/FormSearchByProduct";
import { Table } from "antd";
import { columnsSearchByNumber, dataExample } from "../data/data";
import { useState } from "react";

const SearchByProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
  };
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <BreadcrumbSearchByProduct />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormSearchByProduct
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <Table
            columns={columnsSearchByNumber}
            dataSource={dataExample}
            className="mt-4 table"
            size="small"
            scroll={{ x: "max-content" }}
          /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchByProduct;
