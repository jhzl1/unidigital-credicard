import { slide as MenuSlide } from "react-burger-menu";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import { useState } from "react";
import LogoTransparent from "../assets/img/unidigital-logo-new.png";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";
import {
  UserOutlined,
  FundOutlined,
  ReadOutlined,
  FileOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { dataMenu } from "../data/dataMenu";

const MenuResponsive = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <MenuSlide
      isOpen={false}
      onStateChange={() => setIsOpen(!isOpen)}
      customBurgerIcon={<Burger isOpen={isOpen} />}
    >
      <ProSidebar
        collapsed={false}
        className="d-xs-block d-sm-block d-md-block d-lg-none w-100 p-0 m-0"
      >
        <Link to="/home">
          <img
            src={LogoTransparent}
            alt=""
            style={{ width: "240px" }}
            className="logo-menu"
          />
        </Link>
        <Menu iconShape="square" style={{ minHeight: "100vh" }}>
          {dataMenu.map((item) => (
            <SubMenu
              key={item.id}
              icon={item.icon}
              title={item.name}
              className="submenu"
            >
              {item.items.map((item, index) => (
                <MenuItem key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </MenuItem>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </ProSidebar>
    </MenuSlide>
  );
};

export default MenuResponsive;
