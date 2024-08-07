import React from "react";
import styled from "styled-components";
import { Grid, Typography } from "@mui/material";

import DashboardCards from "../components/Dashboard/DashboardCards";
import NetProfitCard from "../components/Dashboard/NetProfitCard";
import ActivityChart from "../components/Dashboard/ActivityChart";
import Options from "../components/Dashboard/Options";
import RecentOrders from "../components/Dashboard/RecentOrders";
import CustomerFeedback from "../components/Dashboard/CustomerFeedback";

import { useSidebar } from "../context/SidebarContext";

const DashboardPage = () => {
  const { collapsed } = useSidebar();

  return (
    <DashboardContainer collapsed={collapsed}>
      <TitleText>Dashboard</TitleText>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <DashboardCards />
        </Grid>
        <Grid item xs={12} md={4}>
          <NetProfitCard />
        </Grid>
        <Grid item xs={12} md={8}>
          <ActivityChart />
        </Grid>
        <Grid item xs={12} md={4} style={{ height: '100%' }}>
          <Options />
        </Grid>
        <Grid item xs={12} md={8}>
          <RecentOrders />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomerFeedback />
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding: 20px;
  height: 100%;
  margin-left: ${(props) => (props.collapsed ? "70px" : "168px")};
  width: ${(props) =>
    props.collapsed ? "calc(100% - 70px)" : "calc(100% - 168px)"};
  box-sizing: border-box;
  transition: margin-left 0.5s ease, width 0.5s ease; /* Smooth transition for margin-left and width */
  background-color: #081028;

    @media (max-width: 599px) {
    /* Hide sidebar when screen size is less than 600px */
      margin-left: 0px;
  width: 100%;
  }
`;

const TitleText = styled(Typography)`
  margin-bottom: 10px !important;
  font-size: x-large !important;
  font-weight: 700 !important;
  color: #fff !important;
`;

export default DashboardPage;




