import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbBatchList from "../components/BreadcrumbBatchList";
import FormBatchList from "../components/FormBatchList";

const BatchList = () => {
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col xs={10}>
          <BreadcrumbBatchList />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormBatchList />
        </Col>
      </Row>
    </Container>
  );
};

export default BatchList;
