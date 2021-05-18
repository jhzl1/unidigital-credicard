import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  UserOutlined,
  FundOutlined,
  ReadOutlined,
  FileOutlined,
  BarChartOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import LogoTransparent from "../assets/img/unidigital-logo-color.png";

const MenuDesktopTwo = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <ProSidebar collapsed={toggle}>
      <img
        src={LogoTransparent}
        alt=""
        style={{ width: "50px" }}
        className="logo-menu"
      />
      <Menu iconShape="square" style={{ minHeight: "84vh" }}>
        <SubMenu icon={<FileOutlined />} title="Documentos" className="submenu">
          <MenuItem>Número de documento</MenuItem>
          <MenuItem>Número de control</MenuItem>
          <MenuItem>RIF o cédula</MenuItem>
          <MenuItem>Tipo de Documento</MenuItem>
        </SubMenu>
        <SubMenu icon={<FundOutlined />} title="Ciclos">
          <MenuItem>Listas</MenuItem>
        </SubMenu>
        <SubMenu icon={<BarChartOutlined />} title="Indicadores">
          <MenuItem>Por Archivo / Oficina</MenuItem>
        </SubMenu>
        <MenuItem icon={<ReadOutlined />}>Libros</MenuItem>

        <SubMenu icon={<UserOutlined />} title="Administración">
          <MenuItem>Usuarios</MenuItem>
        </SubMenu>
      </Menu>

      <div
        className="d-flex justify-content-center trigger-menu"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <RightOutlined /> : <LeftOutlined />}
      </div>
    </ProSidebar>
  );
};

export default MenuDesktopTwo;
