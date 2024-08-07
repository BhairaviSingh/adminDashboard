import React, { useState } from "react";
import { List } from "@mui/material";
import {
  Dashboard,
  Home,
  BarChart,
  ListAlt,
  AccountBalanceWallet,
  ShoppingCart,
} from "@mui/icons-material";
import {
  SidebarContainer,
  SidebarListItem,
  SidebarIcon,
  SidebarText,
  Divider,
} from "../styles/SidebarStyles";

import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {
  const { collapsed, toggleSidebar } = useSidebar();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  console.log("collapsed", collapsed)

  return (
    <SidebarContainer
      variant="permanent"
      anchor="left"
      collapsed={collapsed ? 1 : 0}
      visible={!collapsed}
      className={collapsed ? "hidden" : ""}
    >
      <List>
        <SidebarListItem
          button
          onClick={toggleSidebar}
          style={{ justifyContent: "center" }}
        >
          <SidebarIcon isDashboard>
            <Dashboard />
          </SidebarIcon>
        </SidebarListItem>

        <Divider />

        <SidebarListItem
          button
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
        >
          <SidebarIcon>
            <Home />
          </SidebarIcon>
          {!collapsed && <SidebarText primary="Home" />}
        </SidebarListItem>

        <SidebarListItem
          button
          selected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
        >
          <SidebarIcon>
            <BarChart />
          </SidebarIcon>
          {!collapsed && <SidebarText primary="Charts" />}
        </SidebarListItem>

        <SidebarListItem
          button
          selected={selectedIndex === 3}
          onClick={() => handleListItemClick(3)}
        >
          <SidebarIcon>
            <ListAlt />
          </SidebarIcon>
          {!collapsed && <SidebarText primary="To-Do" />}
        </SidebarListItem>

        <SidebarListItem
          button
          selected={selectedIndex === 4}
          onClick={() => handleListItemClick(4)}
        >
          <SidebarIcon>
            <AccountBalanceWallet />
          </SidebarIcon>
          {!collapsed && <SidebarText primary="Wallet" />}
        </SidebarListItem>

        <SidebarListItem
          button
          selected={selectedIndex === 5}
          onClick={() => handleListItemClick(5)}
        >
          <SidebarIcon>
            <ShoppingCart />
          </SidebarIcon>
          {!collapsed && <SidebarText primary="Shopping" />}
        </SidebarListItem>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
