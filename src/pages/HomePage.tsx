import BooksList from "../features/books/BooksList";

import Search from "../features/search/Search";
import DropDownSelect from "../features/sort/DropDownSelect";

import { Box, Typography } from "@mui/material";

import { useLoadMore } from "../features/loadMore/use-loadMore";

const HomePage = () => {
  const [handleLoadMoreClick] = useLoadMore();

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
      <button onClick={handleLoadMoreClick}>Load</button>
      {/* <SubmitButton Click={handleLoadMoreClick} text="  Load more books" /> */}
      {/* <button style={{ height: "60px" }} onClick={pagination}>
        {" "}
        Button
      </button> */}
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
        <DropDownSelect props="category" />
        <DropDownSelect props="sorting" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BooksList />
        <button onClick={handleLoadMoreClick}>Load</button>
      </Box>
    </>
  );
};

export default HomePage;
