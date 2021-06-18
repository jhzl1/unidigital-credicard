import { Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb";
import FormBatchList from "../components/FormBatchList";
import { columnsBatchList, dataExampleBatchList } from "../data/data";
import { Table } from "antd";
import { breadcrumbBatchList } from "../data/dataBreadcrumbs";
import { desktopVariants } from "../data/dataAnimation";
import { motion } from "framer-motion";

const BatchList = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <motion.div
      className="my-5 p-4 desktop-container"
      variants={desktopVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
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
    </motion.div>
  );
};

export default BatchList;
