import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb";
import FormBatchList from "../components/FormBatchList";
import { columnsBatchList, dataExampleBatchList } from "../data/data";
import { Table } from "antd";
import { breadcrumbBatchList } from "../data/dataBreadcrumbs";

const BatchList = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <Breadcrumb names={breadcrumbBatchList} />

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
