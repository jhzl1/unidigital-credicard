import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchByFiscalRegistry from "../components/BreadcrumbSearchByFiscalRegistry";
import FormSearchByFiscalRegistry from "../components/FormSearchByFiscalRegistry";
import { columnsSearchByNumber, dataExample } from "../data/data";
import { Table } from "antd";

const SearchByFiscalRegistry = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <BreadcrumbSearchByFiscalRegistry />

          <FormSearchByFiscalRegistry handleSubmit={handleSubmit} />

          <Table
            columns={columnsSearchByNumber}
            dataSource={dataExample}
            className="mt-4 table"
            size="small"
            scroll={{ x: "max-content" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchByFiscalRegistry;
