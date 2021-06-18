import { Row, Col } from "react-bootstrap";
import FormSearchByControl from "../components/FormSearchByControl";
import Breadcrumb from "../components/Breadcrumb";
import { Table, Spin, message } from "antd";
import { useState } from "react";
import { columnsGeneral } from "../data/dataGeneralTable";
import { breadcrumbSearchByControl } from "../data/dataBreadcrumbs";
import { desktopVariants } from "../data/dataAnimation";
import { motion } from "framer-motion";
import { sendData } from "../services/sendData";

const SearchByControl = () => {
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setDataTable([]);
    setLoading(true);
    console.log(data);
    try {
      const res = await sendData("/documents/searchbycontrolnumber", data);
      console.log(res);
      setDataTable(res.data.documents);

      if (
        res.data.information[0] ===
        "No se han encontrado documentos por el numero de control indicado"
      ) {
        message.warning(res.data.information[0], [5]);
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
          <Breadcrumb names={breadcrumbSearchByControl} />

          <FormSearchByControl handleSubmit={handleSubmit} />

          {loading && (
            <div className="d-flex w-100 justify-content-center p-5">
              <Spin size="large" className="text-center" />
            </div>
          )}
          {!!dataTable && dataTable.length !== 0 && (
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

export default SearchByControl;
