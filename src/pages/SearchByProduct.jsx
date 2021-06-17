import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb";
import FormSearchByProduct from "../components/FormSearchByProduct";
// import { Table } from "antd";
// import { columnsSearchByNumber, dataExample } from "../data/data";
import { useState } from "react";
import { breadcrumbSearchByProduct } from "../data/dataBreadcrumbs";

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
          <Breadcrumb names={breadcrumbSearchByProduct} />

          <FormSearchByProduct
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />

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
