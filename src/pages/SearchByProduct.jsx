import { Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb";
import FormSearchByProduct from "../components/FormSearchByProduct";
// import { Table } from "antd";
// import { columnsSearchByNumber, dataExample } from "../data/data";
import { useState } from "react";
import { breadcrumbSearchByProduct } from "../data/dataBreadcrumbs";
import { desktopVariants } from "../data/dataAnimation";
import { motion } from "framer-motion";

const SearchByProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
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
          <Breadcrumb names={breadcrumbSearchByProduct} />

          <FormSearchByProduct
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />

          {/* <Table
            columns={columnsSearchByNumber}
            dataSource={dataExample}
            className="mt-4 table"
            size="small"
            scroll={{ x: "max-content" }}
          /> */}
        </Col>
      </Row>
    </motion.div>
  );
};

export default SearchByProduct;
