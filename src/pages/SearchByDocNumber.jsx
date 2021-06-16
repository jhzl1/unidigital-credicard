import FormSearchByDocNumber from "../components/FormSearchByDocNumber";
import { Container, Row, Col } from "react-bootstrap";
import BreadcrumbSearchByDocNumber from "../components/BreadcrumbSearchByDocNumber";
import { Table, Spin, message } from "antd";
import { columnsSearchByNumber } from "../data/data";
import { useState } from "react";
import { sendData } from "../services/api";
import { notFoundDocument } from "../data/dataErrors";
import { desktopVariants } from "../data/dataAnimation";
import { motion } from "framer-motion";

const SearchByDocNumber = () => {
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
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
          <BreadcrumbSearchByDocNumber />

          <FormSearchByDocNumber handleSubmit={handleSubmit} />

          {loading && (
            <div className="d-flex w-100 justify-content-center p-5">
              <Spin size="large" className="text-center" />
            </div>
          )}

          {dataTable.length > 1 && (
            <Table
              columns={columnsSearchByNumber}
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
