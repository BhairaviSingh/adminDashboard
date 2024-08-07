import React from 'react';
import { Typography, Grid } from '@mui/material';
import { LocalShipping, ShoppingCart, Cancel, AttachMoney } from '@mui/icons-material';
import { Card, CardIcon, CardContent, NumberAndProfit, ProfitText } from '../../styles/DashboardCardStyles';

const DashboardCards = () => {
  return (
    <Grid container spacing={2}> 
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardIcon style={{ backgroundColor: '#e3f2fd' }}>
            <ShoppingCart style={{ color: '#2196f3' }} /> 
          </CardIcon>
          <CardContent>
            <Typography variant="body2" style={{color: '#aeb9e1'}}>Total Orders</Typography>
            <NumberAndProfit>
              <Typography variant="h4">75</Typography>
              <ProfitText variant="body2" color="green">{'\u25B2'} 3%</ProfitText> 
            </NumberAndProfit>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardIcon style={{ backgroundColor: '#e8f5e9' }}>
            <LocalShipping style={{ color: '#4caf50' }} /> 
          </CardIcon>
          <CardContent>
            <Typography variant="body2" style={{color: '#aeb9e1'}}>Total Delivered</Typography>
            <NumberAndProfit>
              <Typography variant="h4">70</Typography>
              <ProfitText variant="body2" color="green">{'\u25B2'} 3%</ProfitText>
            </NumberAndProfit>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardIcon style={{ backgroundColor: '#fff3e0' }}>
            <Cancel style={{ color: '#ff9800' }} /> 
          </CardIcon>
          <CardContent>
            <Typography variant="body2" style={{color: '#aeb9e1'}}>Total Cancelled</Typography>
            <NumberAndProfit>
              <Typography variant="h4">5</Typography>
              <ProfitText variant="body2" color="red">{'\u25BC'} 3%</ProfitText> 
            </NumberAndProfit>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardIcon style={{ backgroundColor: '#fce4ec' }}>
            <AttachMoney style={{ color: '#e91e63' }} /> 
          </CardIcon>
          <CardContent>
            <Typography variant="body2" style={{color: '#aeb9e1'}}>Total Revenue</Typography>
            <NumberAndProfit>
              <Typography variant="h4">$12k</Typography>
              <ProfitText variant="body2" color="red">{'\u25BC'} 3%</ProfitText>
            </NumberAndProfit>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardCards;
