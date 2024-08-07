import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import {
  CardContainer,
  CardContent,
  CircularProgressWrapper,
  ProfitDetails,
  ProfitAmount,
  ProfitPercentage,
  ProgressContainer,ProgressWrapper, InnerText, Percentage, ProgressText, FooterText, ProgressBar
} from "../../styles/NetProfitCardStyles";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const NetProfitCard = () => {
  const percentage = 70;


  return (
    <CardContainer>
      <CardContent>
        <ProfitDetails>
          <Typography variant="body2" sx={{color: '#aeb9e1'}}>Net Profit</Typography>
          <ProfitAmount variant="h4">$6759.25</ProfitAmount>
          
          <ProfitPercentage variant="body2" color="green">
            {"\u25B2"} 3%
          </ProfitPercentage>{" "}
          {/* Upward arrow */}
        </ProfitDetails>

        <ProgressBar>
        <ProgressContainer>
        <ProgressWrapper>
          <CircularProgressbar
            value={percentage}
            // text={`${percentage}%`}
            styles={buildStyles({
              pathColor: `#cb3cff`,
              textColor: '#fff',
              trailColor: '#fff',
              textSize: '16px',
            })}
          />
          <InnerText>
            <Percentage>{percentage}%</Percentage>
            <ProgressText>Goal Completed</ProgressText>
          </InnerText>
        </ProgressWrapper>
      </ProgressContainer>
      <FooterText>*The values here have been rounded off</FooterText>

        </ProgressBar>
        
       


      </CardContent>
    </CardContainer>
  );
};

export default NetProfitCard;
