import MenuDesktop from "../components/MenuDesktop";
import { Container, Row, Col } from "react-bootstrap";
import MenuResponsive from "./MenuResponsive";
import CredicardLogo from "../assets/img/credicard_logo2.png";
import UserHeader from "./UserHeader";
import ContentFooter from "../components/ContentFooter";
import { Divider } from "antd";

const Desktop = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs="auto" sm="auto" md="auto" lg="auto" className=" ps-0 pe-0">
          <MenuDesktop />
          <MenuResponsive />
        </Col>

        <Col className="ps-0 pe-0 ">
          <Container className="ps-0 pe-0" fluid>
            <Row className="m-0">
              <Col className="header-desktop p-2">
                <img
                  src={CredicardLogo}
                  alt="Credicard"
                  className="ms-4 logo-desktop"
                />
                <Divider type="vertical" className="fs-2 m-3 bg-secondary" />
                <UserHeader
                  userName="Omar"
                  userSurname="Campos"
                  role="Supervisor"
                />
              </Col>
            </Row>
            <Row className="mx-3">
              <Col>{children}</Col>
            </Row>

            <ContentFooter />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Desktop;
