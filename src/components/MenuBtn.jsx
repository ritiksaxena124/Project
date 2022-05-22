import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import CloseBtn from "../images/close.png";
import MenuBt from "../images/menu.png";
function MenuBtn() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <MenuButn
        onClick={() =>
          openSidebar ? setOpenSidebar(false) : setOpenSidebar(true)
        }
      >
        <Menu src={openSidebar ? CloseBtn : MenuBt} />
      </MenuButn>

      {<Sidebar action={openSidebar} />}
    </>
  );
}

export default MenuBtn;

const MenuButn = styled.div`
  position: absolute;
  right: 0;
  margin: 20px 30px;
  background: #111111;
  padding: 5px;
  width: 45px;
  height: 45px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 100;
  @media screen and (max-width: 450px) {
   margin: 15px 10px;
  }
`;
const Menu = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: invert(100%);
`;
