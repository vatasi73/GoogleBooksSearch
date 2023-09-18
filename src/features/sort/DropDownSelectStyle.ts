import { styled, Button } from "@mui/material";

export const SelectButton = styled(Button)({
  background: "gray",
  color: "white",
  backgroundColor: "none",
  transition: "0.5s",
  "&:hover": {
    color: "white",
    background: "gray",
    transition: "0.5s",
    opacity: "0.6",
  },
});
