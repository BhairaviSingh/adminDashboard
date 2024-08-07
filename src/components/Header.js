import React from "react";
import { IconButton } from "@mui/material";
import {
  MailOutlineOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  Search,
  Menu,
} from "@mui/icons-material";
import {
  HeaderContainer,
  SearchBar,
  IconWrapper,
  ProfilePicture,
  NotificationDot,
  IconButtonStyled,
  SearchIconWrapper,
  Divider,
  HamburgerIcon,
} from "../styles/HeaderStyles";

import picture from "../assets/images/profilePicture.jpg";
import { useSidebar } from "../context/SidebarContext";

const Header = () => {
  const { collapsed, toggleSidebar } = useSidebar();

  return (
    <HeaderContainer collapsed={collapsed}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <HamburgerIcon onClick={toggleSidebar}>
          <Menu />
        </HamburgerIcon>

        <HamburgerIcon>
          <Search />
        </HamburgerIcon>

        <SearchBar
          placeholder="Search..."
          startAdornment={
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
          }
        />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <IconWrapper>
          <IconButtonStyled>
            <MailOutlineOutlined />
          </IconButtonStyled>
        </IconWrapper>

        <IconWrapper>
          <IconButtonStyled>
            <SettingsOutlined />
          </IconButtonStyled>
        </IconWrapper>

        <IconWrapper>
          <IconButtonStyled>
            <NotificationsOutlined />
            <NotificationDot />
          </IconButtonStyled>
        </IconWrapper>

        <Divider />

        <ProfilePicture src={picture} alt="Profile Picture" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
