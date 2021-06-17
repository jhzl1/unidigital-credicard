import { Container, Col } from "react-bootstrap";
import UserList from "../components/UserList";
import { Drawer, Button } from "antd";
import { useState } from "react";
import { UserAddOutlined } from "@ant-design/icons";
import FormCreateNewUser from "../components/FormCreateNewUser";
import Breadcrumb from "../components/Breadcrumb";
import { breadcrumbAdmin } from "../data/dataBreadcrumbs";
import { motion } from "framer-motion";
import { desktopVariants } from "../data/dataAnimation";

const AdminPage = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <motion.div
      className="my-5 p-4 desktop-container"
      variants={desktopVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
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
    </motion.div>
  );
};

export default AdminPage;
