import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb";
import { Tabs } from "antd";
import Graphics from "../components/Graphics";
import FormSearchBatch from "../components/FormSearchBatch";
import { motion } from "framer-motion";
import { desktopVariants } from "../data/dataAnimation";
import { breadcrumbSearchBatch } from "../data/dataBreadcrumbs";

const SearchBatch = () => {
  const { TabPane } = Tabs;
  return (
    <motion.div
      variants={desktopVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Container className="desktop-container my-5 p-4" fluid>
        <Row>
          <Col>
            <Breadcrumb names={breadcrumbSearchBatch} />

            <Tabs defaultActiveKey="1">
              <TabPane tab=" Parámetros de búsqueda" key="1">
                <FormSearchBatch />
              </TabPane>
              <TabPane tab="Gráficos" key="2">
                <Graphics />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default SearchBatch;
