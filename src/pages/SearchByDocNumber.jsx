import FormSearchByDocNumber from "../components/FormSearchByDocNumber";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb";
import { Table, Spin, message } from "antd";
import { useState } from "react";
import { notFoundDocument } from "../data/dataErrors";
import { desktopVariants } from "../data/dataAnimation";
import { motion } from "framer-motion";
import { columnsGeneral } from "../data/dataGeneralTable";
import { breadcrumbSearchByDocNumber } from "../data/dataBreadcrumbs";
import { sendData } from "../services/sendData";

const SearchByDocNumber = () => {
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setDataTable([]);
    setLoading(true);
    try {
      const res = await sendData("/documents/searchbynumber", data);
      console.log(res);
      setDataTable(res.data.documents);
      if (res.data.information[0] === notFoundDocument) {
        message.warning(notFoundDocument, [5]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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
          <Breadcrumb names={breadcrumbSearchByDocNumber} />

          <FormSearchByDocNumber handleSubmit={handleSubmit} />

          {loading && (
            <div className="d-flex w-100 justify-content-center p-5">
              <Spin size="large" className="text-center" />
            </div>
          )}

          {dataTable.length !== 0 && (
            <Table
              columns={columnsGeneral}
              dataSource={dataTable}
              rowKey="strongId"
              className="mt-4 table"
              scroll={{ x: "max-content" }}
              size="small"
            />
          )}
        </Col>
      </Row>
    </motion.div>
  );
};

export default SearchByDocNumber;
