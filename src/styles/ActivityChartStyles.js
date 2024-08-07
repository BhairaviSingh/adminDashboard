// StyledComponents.js
import { styled } from "@mui/system";
import { Paper } from "@mui/material";
import { Bar } from "recharts";

export const ChartContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "#0b1739",

  ".recharts-default-legend": {
    visibility: "hidden !important",
  },
}));

export const StyledBar = styled(Bar)({
  marginBottom: "10px",
  borderRadius: "10px",
});

export const DropdownContainer = styled("div")({
  position: "absolute",
  top: "-22px",
  right: "0%",
  transform: "translateX(-50%)", 
  zIndex: 10, 
  color: "white !important",

  ".css-1k9g3m9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root": {
    borderRadius: "100px !important",
    border: "1px solid #fff !important",
    background: "#464646",
  },

  ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
    color: "#fff !important",
  },

  ".MuiSelect-icon": {
    fill: "#fff",
  },

  '.css-qiwgdb': {
    color : '#fff !important',
    borderRadius: "100px !important",
    border: "1px solid #fff !important",
    background: "#464646 !important",
  }
});
