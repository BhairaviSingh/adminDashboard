import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Paper, Typography, Box, MenuItem, Select, FormControl } from '@mui/material';
import { ChartContainer, DropdownContainer,  } from '../../styles/ActivityChartStyles'; // Import your styled components

const sampleData = [
  { date: '5', steps: 3000 },
  { date: '9', steps: 4000 },
  { date: '11', steps: 3500 },
  { date: '13', steps: 5000 },
  { date: '15', steps: 4500 },
  { date: '17', steps: 6000 },
  { date: '19', steps: 5500 },
  { date: '21', steps: 6200 },
  { date: '23', steps: 6800 },
  { date: '25', steps: 7000 },
  { date: '27', steps: 7500 },
];

const ActivityChart = () => {
  const [dropdownValue, setDropdownValue] = React.useState('5');

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  return (
    <ChartContainer>
      <Typography variant="h6" gutterBottom style={{color: '#fff', fontWeight: '600'}}>
        Activity
      </Typography>
      <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <BarChart
          width={600}
          height={250}
          data={sampleData}
          barCategoryGap={0}
        >
          <XAxis dataKey="date" />
          <YAxis
            tickFormatter={(value) => `${value / 1000}k`}
            domain={[0, 15000]}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="steps"
            fill="#cb3cff"
            barSize={20}
            radius={[10, 10, 10, 10]}
          />
        </BarChart>

        {/* Dropdown positioned between bars */}
        <DropdownContainer>
          <FormControl>
            <Select
              value={dropdownValue}
              onChange={handleDropdownChange}
              sx={{ minWidth: 120, height: 30 }}
            >
              <MenuItem value="5">Weekly</MenuItem>
              <MenuItem value="9">Monthly</MenuItem>
              <MenuItem value="11">Yearly</MenuItem>
           
            </Select>
          </FormControl>
        </DropdownContainer>
      </Box>
    </ChartContainer>
  );
};

export default ActivityChart;
