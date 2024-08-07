import styled from "styled-components";
import { Paper, Typography } from "@mui/material";

export const CardContainer = styled(Paper)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0b1739 !important;
  color: #fff !important;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ProfitDetails = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProfitAmount = styled(Typography)`
  margin-top: 10px;
`;

export const ProfitPercentage = styled(Typography)`
  margin-top: 5px;
  color: ${(props) => props.color};
`;

export const CircularProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .CircularProgressbar-path {
    stroke: blue !important;
  }
`;

export const ProgressContainer = styled.div`
  text-align: center;
`;

export const ProgressWrapper = styled.div`
  position: relative;
  width: 83px;
  height: 89px;
  margin: 0 auto;
`;

export const InnerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Percentage = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ProgressText = styled.p`
  font-size: 8px;
  margin: 0px;
  color: #aaaaaa;
  margin-bottom: -5px;
`;

export const FooterText = styled.p`
  font-size: 8px;
  color: #aaaaaa;
  margin: 0px;
`;

export const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
`;


