import { Container, Col } from "react-bootstrap";
import UserList from "../components/UserList";
import { Drawer, Button } from "antd";
import { useState } from "react";
import { UserAddOutlined } from "@ant-design/icons";
import FormCreateNewUser from "../components/FormCreateNewUser";
import Breadcrumb from "../components/Breadcrumb";
import { breadcrumbAdmin } from "../data/dataBreadcrumbs";

const AdminPage = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Container className="desktop-container my-5 p-4 " fluid>
      <Col>
        <Breadcrumb names={breadcrumbAdmin} />

        <Button type="primary" onClick={showDrawer}>
          <UserAddOutlined /> Crear nuevo usuario
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          width={380}
        >
          <FormCreateNewUser />
        </Drawer>

        <UserList />
      </Col>
    </Container>
  );
};

export default AdminPage;
