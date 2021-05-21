import CredicardLogo from "../assets/img/credicard_logo2.png";
import UserHeader from "./UserHeader";
import ContentFooter from "../components/ContentFooter";
import { Container, Row, Col } from "react-bootstrap";

const ContentDesktop = ({ childrens }) => {
  return (
    <Container className="ps-0 pe-0" fluid>
      <Row className="m-0">
        <Col className="header-desktop p-2">
          <img
            src={CredicardLogo}
            height="50"
            width="160px"
            alt="Credicard"
            className="ms-4 me-3"
          />
          <UserHeader user="Mi Perfil" />
        </Col>
      </Row>
      <Row className="mx-3">
        <Col>{childrens}</Col>
      </Row>

      <ContentFooter />
    </Container>
  );
};

export default ContentDesktop;
