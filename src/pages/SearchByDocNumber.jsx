import FormSearchByDocNumber from "../components/FormSearchByDocNumber";
import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchByDocNumber from "../components/BreadcrumbSearchByDocNumber";
import { Table } from "antd";
import { columnsSearchByNumber, dataExample } from "../data/data";

const SearchByDocNumber = () => {
  const handleSubmit = async (data, { resetForm }) => {
    try {
      console.log(data);

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <BreadcrumbSearchByDocNumber />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormSearchByDocNumber handleSubmit={handleSubmit} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table
            columns={columnsSearchByNumber}
            dataSource={dataExample}
            className="mt-4 table"
            scroll={{ x: "max-content" }}
            size="small"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchByDocNumber;
