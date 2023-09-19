import { styled, Button } from "@mui/material";

export const SearchButton = styled(Button)({
  textTransform: "none",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "21px",
  background: "gray",
  color: "white",
  backgroundColor: "none",
  transition: "opacity 0.5s ",
  "&:hover": {
    color: "gray",
    background: "none",
    transition: "opacity 0.5s ",
  },
  "& .MuiTouchRipple-root": {
    color: "white",
  },
});
