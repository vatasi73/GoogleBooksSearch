import { GlobalStyles } from "@mui/material";
import React from "react";

const StyledScroll = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          fontFamily: '"Inter", sans-serif',
          "*::-webkit-scrollbar": {
            width: "0.4em",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(218, 218, 223, 1)",
            borderRadius: "10px",
          },
        }}
      />
    </>
  );
};

export default StyledScroll;
