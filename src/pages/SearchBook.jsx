import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchBook from "../components/BreadcrumbSearchBook";
import FormSearchBook from "../components/FormSearchBook";

const SearchBook = () => {
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <BreadcrumbSearchBook />

          <FormSearchBook />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBook;
