import styled from "styled-components";
import { Paper, Typography } from "@mui/material";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; /* Space between cards */  
`;

export const Card = styled(Paper)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #0b1739 !important;
  color: #ffffff !important;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  text-align: left; /* Align text to the left */
  width: 100%;
`;

export const NumberAndProfit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

export const ProfitText = styled(Typography)`
  margin-left: 10px;
  color: ${(props) => props.color};
`;
