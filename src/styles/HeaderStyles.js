import styled from "styled-components";
import { InputBase, IconButton } from "@mui/material";
import { Divider as MUIDivider } from "@mui/material";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #081028;
  margin-left: ${(props) => (props.collapsed ? "70px" : "168px")};
  width: ${(props) =>
    props.collapsed ? "calc(100% - 70px)" : "calc(100% - 168px)"};
  box-sizing: border-box;
  transition: margin-left 0.5s ease, width 0.5s ease;
  z-index: 1000;
  border: 1px solid #0b1739;

  @media (max-width: 599px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const Divider = styled(MUIDivider)`
  margin: 0 15px !important;
`;

export const SearchBar = styled(InputBase)`
  flex: 1;
  background: #0b1739;
  border-radius: 4px;
  max-width: 240px;
  height: 30px;
  padding-left: 40px;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid #343b4f;

  .css-yz9k0d-MuiInputBase-input {
    color: #aeb9e1;
  }

  @media (max-width: 599px) {
    visibility: hidden;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #464646;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
  position: relative;
  box-sizing: border-box;
`;

export const NotificationDot = styled.div`
  position: absolute;
  top: 5px;
  right: 2px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #cb3cff;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  object-fit: cover;
`;

export const IconButtonStyled = styled(IconButton)`
  && {
    width: 18px !important;
    color: #aeb9e1 !important;
    padding: 0;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #aeb9e1;
  width: 18px !important;
`;

export const HamburgerIcon = styled(IconButton)`
  && {
    display: none;

    @media (max-width: 599px) {
      display: block;
      color: #aeb9e1;
      margin-right: 10px;
    }
  }
`;
