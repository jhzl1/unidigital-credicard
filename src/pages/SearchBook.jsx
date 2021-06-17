import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb";
import FormSearchBook from "../components/FormSearchBook";
import { breadcrumbSearchBook } from "../data/dataBreadcrumbs";

const SearchBook = () => {
  return (
    <Container className="desktop-container my-5 p-4" fluid>
      <Row>
        <Col>
          <Breadcrumb names={breadcrumbSearchBook} />

          <FormSearchBook />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBook;
