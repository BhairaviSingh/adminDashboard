import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Define styles for status
const StatusBox = styled(Box)(({ status }) => ({
  backgroundColor: status === 'Delivered' ? '#0a3943' : '#430a0a', // Light green for Delivered, light red for other statuses
  color: status === 'Delivered' ? '#14ca74' : '#ff4d4f',
  borderRadius: '20px',
  padding: '4px 8px',
  textAlign: 'center',
}));

// Styled components for the table
const StyledPaper = styled(Paper)({
  padding: '16px',
  backgroundColor: '#0b1739',
  color: '#aeb9e1',
  overflow: 'auto',
});

const StyledTableCell = styled(TableCell)({
  color: '#aeb9e1',
  fontWeight: '600',
});

const StyledTableHeadCell = styled(TableCell)({
  color: '#fff',
  fontWeight: '600',
});

const columns = [
  { title: 'Customer', key: 'customer' },
  { title: 'Order No.', key: 'orderNo' },
  { title: 'Amount', key: 'amount' },
  { title: 'Status', key: 'status' },
];

const data = [
  { key: 1, profile: 'https://via.placeholder.com/40', customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { key: 2, profile: 'https://via.placeholder.com/40', customer: 'Jane Cooper', orderNo: '48956786', amount: '$305.02', status: 'Pending' },
  { key: 3, profile: 'https://via.placeholder.com/40', customer: 'John Doe', orderNo: '65432109', amount: '$89.50', status: 'Cancelled' },
  { key: 4, profile: 'https://via.placeholder.com/40', customer: 'Emily Smith', orderNo: '12345678', amount: '$210.75', status: 'Delivered' },
  { key: 5, profile: 'https://via.placeholder.com/40', customer: 'Michael Johnson', orderNo: '98765432', amount: '$175.20', status: 'Pending' },

];

const RecentOrders = () => {
  return (
    <StyledPaper>
      <Typography variant="h6" gutterBottom style={{ color: '#fff', fontWeight: '600' }}>
        Recent Orders
      </Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: '#0b1739' }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <StyledTableHeadCell key={col.key}>{col.title}</StyledTableHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.key}>
                <StyledTableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={row.profile} alt={row.customer} sx={{ marginRight: 1 }} />
                    {row.customer}
                  </Box>
                </StyledTableCell>
                <StyledTableCell>{row.orderNo}</StyledTableCell>
                <StyledTableCell>{row.amount}</StyledTableCell>
                <StyledTableCell>
                  <StatusBox status={row.status}>
                    {row.status}
                  </StatusBox>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
};

export default RecentOrders;
