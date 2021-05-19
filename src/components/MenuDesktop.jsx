import { useState } from "react";
import { Link } from "react-router-dom";
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
import MenuResponsive from "./MenuResponsive";

const MenuDesktop = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <MenuResponsive display="d-none" />
      <ProSidebar
        collapsed={toggle}
        className="d-none d-sm-none d-md-none d-lg-block"
      >
        <Link to="/home">
          <img
            src={LogoTransparent}
            alt=""
            style={{ width: "50px" }}
            className="logo-menu"
          />
        </Link>
        <Menu iconShape="square" style={{ minHeight: "84vh" }}>
          <SubMenu
            icon={<FileOutlined />}
            title="Documentos"
            className="submenu"
          >
            <MenuItem>
              <Link to="/documents/SearchByNumber">Número de documento</Link>
            </MenuItem>
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
    </>
  );
};

export default MenuDesktop;
