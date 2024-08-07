import styled from "styled-components";
import { Drawer, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Divider as MUIDivider } from "@mui/material";

const drawerWidth = 180;
const collapsedWidth = 70;

export const SidebarContainer = styled(Drawer)`
  .MuiDrawer-paper {
    width: ${(props) =>
      props.collapsed ? `${collapsedWidth}px` : `${drawerWidth}px`};
    box-sizing: border-box;
    background-color: #081028;
    border: 1px solid #0b1739;
    color: #aeb9e1;
    transition: width 0.5s;
  }

  @media (max-width: 599px) {
    /* Hide sidebar when screen size is less than 600px */

    .MuiDrawer-paper {
      display: ${(props) => (props.visible ? "block" : "none")};
      transition: width 0.5s;
    }
  }
`;

export const Divider = styled(MUIDivider)`
  margin: 15px 0 !important;
`;

export const SidebarListItem = styled(ListItem)`
  &.Mui-selected {
    background-color: transparent !important;
    .MuiListItemIcon-root {
      color: #cb3cff !important;
    }
    .MuiTypography-root {
      color: #cb3cff;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 2px; /* Width of the line */
      height: 70%;
      background-color: #cb3cff; /* Line color */
    }
  }
  &:hover {
    background-color: transparent !important;
  }
`;

export const SidebarIcon = styled(ListItemIcon)`
  color: ${(props) => (props.isDashboard ? "#cb3cff" : "#aeb9e1")} !important;
  min-width: 35px !important;
`;

export const SidebarText = styled(ListItemText)`
  .MuiTypography-root {
    color: #aeb9e1;
  }
`;
