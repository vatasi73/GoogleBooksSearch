import BooksList from "../features/books/BooksList";

import Search from "../features/search/Search";
import DropDownSelect from "../features/sort/DropDownSelect";

import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: "40px",
          mb: "2rem",
          fontWeight: 600,
        }}
      >
        Search for Books
      </Typography>
      <Search />
      <Box
        sx={{
          margin: "1em auto",
          display: "flex",
          maxWidth: "600px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <DropDownSelect props="Category" />
        <DropDownSelect props="Sorting" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BooksList />
      </Box>
    </>
  );
};

export default HomePage;
