import MenuDesktop from "../components/MenuDesktop";
import ContentDesktop from "../components/ContentDesktop";
import { Layout } from "antd";

const Desktop = ({ children }) => {
  const { Content } = Layout;
  return (
    <Layout className="d-flex flex-row">
      <MenuDesktop />
      <ContentDesktop content={Content} childrens={children} />
    </Layout>
  );
};

export default Desktop;
