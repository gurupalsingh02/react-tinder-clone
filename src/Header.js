import React from "react";
import "./Header.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdForum } from "react-icons/md";
import styled from "styled-components";
const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <MdOutlineAccountCircle className="header__icon" style={{ fontSize: "large", color: "black" }} />
      </IconButton>
      <IconButton>
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2022/08/Logo-Tinder-768x432.png"
          alt="logo"
        />
      </IconButton>
      <IconButton>
        <MdForum className="header__icon" style={{ fontSize: "large", color: "black" }}/>
      </IconButton>
    </div>
  );
};
const IconButton = styled.button`
border: none;
background-color: white;
`;
export default Header;
