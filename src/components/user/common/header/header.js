import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../../../assets/img/logo/logo.png";
import { settings } from "../../../../helpers/settings";
import TopBar from "./topbar";
import MenuBar from "./menubar";
const Header = () => {
  return (
    <Container>
      <div className="header">
        <div className="logo">
          <img src={logo} alt={settings.siteName} className="img-fluid" />
        </div>
        <div className="menus">
          <TopBar />
          <MenuBar />
        </div>
      </div>
    </Container>
  );
};

export default Header;
