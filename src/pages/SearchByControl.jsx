import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchByControl from "../components/BreadcrumbSearchByControl";
import FormSearchByControl from "../components/FormSearchByControl";
import { columnsSearchByNumber, dataExample } from "../data/data";
import { Table } from "antd";

const SearchByControl = () => {
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
          <BreadcrumbSearchByControl />

          <FormSearchByControl handleSubmit={handleSubmit} />

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

export default SearchByControl;
