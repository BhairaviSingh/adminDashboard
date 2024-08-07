import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Icon } from '@mui/material';
import TargetIcon from '@mui/icons-material/ModeStandby';
import BurgerIcon from '@mui/icons-material/RestaurantMenu'; // Use MUI's burger icon
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Use MUI's menu book icon
import { ChevronLeft } from '@mui/icons-material';
import { CardContainer } from '../../styles/OptionsStyles';

const optionsData = [
  {
    label: "Goals",
    icon: <TargetIcon sx={{ color: '#FF5722', bgcolor: '#FFCCBC', borderRadius: '50%', padding: '12px', fontSize: '2rem' }} />, // Increased size
  },
  {
    label: "Popular Dishes",
    icon: <BurgerIcon sx={{ color: '#2196F3', bgcolor: '#BBDEFB', borderRadius: '50%', padding: '12px', fontSize: '2rem' }} />, // Increased size
  },
  {
    label: "Menus",
    icon: <MenuBookIcon sx={{ color: '#009688', bgcolor: '#B2DFDB', borderRadius: '50%', padding: '12px', fontSize: '2rem' }} />, // Increased size
  }
];

const OptionsComponent = () => {
  return (
    <CardContainer>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {optionsData.map((option, index) => (
          <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemIcon>
              {option.icon}
            </ListItemIcon>
            <ListItemText primary={option.label} />
            <Icon sx={{ marginLeft: 'auto', transform: 'rotate(45deg)' }}>
              <ChevronLeft />
            </Icon>
          </ListItem>
        ))}
      </List>
    </CardContainer>
  );
};

export default OptionsComponent;
