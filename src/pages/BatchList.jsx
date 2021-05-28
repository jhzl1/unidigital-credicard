import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbBatchList from "../components/BreadcrumbBatchList";
import FormBatchList from "../components/FormBatchList";
import { columnsBatchList, dataExampleBatchList } from "../data/data";
import { Table } from "antd";

const BatchList = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <BreadcrumbBatchList />

          <FormBatchList handleSubmit={handleSubmit} />

          <Table
            columns={columnsBatchList}
            dataSource={dataExampleBatchList}
            className="mt-4 table"
            size="small"
            scroll={{ x: "max-content" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BatchList;
