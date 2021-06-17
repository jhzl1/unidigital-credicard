import { Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb";
import FormSearchBook from "../components/FormSearchBook";
import { desktopVariants } from "../data/dataAnimation";
import { breadcrumbSearchBook } from "../data/dataBreadcrumbs";
import { motion } from "framer-motion";

const SearchBook = () => {
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
          <Breadcrumb names={breadcrumbSearchBook} />

          <FormSearchBook />
        </Col>
      </Row>
    </motion.div>
  );
};

export default SearchBook;
