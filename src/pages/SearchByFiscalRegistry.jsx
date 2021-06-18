import { Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb";
import FormSearchByFiscalRegistry from "../components/FormSearchByFiscalRegistry";
import { Table, Spin, message } from "antd";
import { useState } from "react";
import { columnsGeneral } from "../data/dataGeneralTable";
import { breadcrumbSearchByFiscalRegistry } from "../data/dataBreadcrumbs";
import { desktopVariants } from "../data/dataAnimation";
import { motion } from "framer-motion";
import { sendData } from "../services/sendData";

const SearchByFiscalRegistry = () => {
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setDataTable([]);
    setLoading(true);
    try {
      const res = await sendData("/documents/searchbyrif", data);
      if (
        res.data.information[0] ===
        "No se han encontrado documentos por el rif indicado"
      ) {
        message.warning(res.data.information[0], [5]);
      }
      setDataTable(res.data.documents);
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
          <Breadcrumb names={breadcrumbSearchByFiscalRegistry} />

          <FormSearchByFiscalRegistry handleSubmit={handleSubmit} />
          {loading && (
            <div className="d-flex w-100 justify-content-center p-5">
              <Spin size="large" className="text-center" />
            </div>
          )}

          {dataTable.length > 1 && (
            <Table
              columns={columnsGeneral}
              dataSource={dataTable}
              className="mt-4 table"
              size="small"
              scroll={{ x: "max-content" }}
              rowKey="strongId"
            />
          )}
        </Col>
      </Row>
    </motion.div>
  );
};

export default SearchByFiscalRegistry;
