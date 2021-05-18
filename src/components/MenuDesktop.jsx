import { useState } from "react";
import { Menu, Layout } from "antd";
import {
  UserOutlined,
  FundOutlined,
  ReadOutlined,
  FileOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import LogoTransparent from "../assets/img/unidigital-transparent.png";

const MenuDesktop = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { SubMenu } = Menu;
  const { Sider } = Layout;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      className="site-layout-background"
    >
      <img
        src={LogoTransparent}
        alt=""
        style={{ width: "50px" }}
        className="logo-menu"
      />
      <Menu mode="inline" theme="dark" id="menu-navbar">
        <SubMenu key="sub1" icon={<FileOutlined />} title="Documentos">
          <Menu.Item key="1">Número de documento</Menu.Item>
          <Menu.Item key="2">Número de control</Menu.Item>
          <Menu.Item key="3">RIF o cédula</Menu.Item>
          <Menu.Item key="4">Tipo de Documento</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<FundOutlined />} title="Ciclos">
          <Menu.Item key="5">Lista</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<BarChartOutlined />} title="Indicadores">
          <Menu.Item key="6">Por Archivo / Oficina</Menu.Item>
        </SubMenu>
        <Menu.Item key="7" icon={<ReadOutlined />}>
          Libros
        </Menu.Item>

        <SubMenu key="sub4" icon={<UserOutlined />} title="Administración">
          <Menu.Item key="8">Usuarios</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default MenuDesktop;
