import { Box, Grid, Typography } from "@mui/material";

import { useBooks } from "./use-books";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import { selectAllBooks, selectBooksInfo } from "./books-selectors";

const BooksList = () => {
  const [updateBooks] = useBooks();
  const books = useSelector(selectAllBooks);
  const { status, error } = useSelector(selectBooksInfo);
  return (
    <>
      {error ? (
        "ОШИБКА"
      ) : (
        <>
          {status === "loading" ? (
            "ГРУЖУУУУ"
          ) : (
            <>
              {" "}
              {status === "received" && (
                <>
                  {books && (
                    <Typography sx={{ textAlign: "center", fontSize: "18px" }}>
                      Total books found{" " + books.totalItems}
                    </Typography>
                  )}
                  {books.totalItems !== 0 && (
                    <Grid
                      container
                      spacing={3}
                      sx={{
                        gap: "20px",
                        margin: "3rem 0",
                        justifyContent: "center",
                      }}
                    >
                      {!updateBooks
                        ? ""
                        : updateBooks.map((el) => (
                            <BookCard
                              key={el.id}
                              id={el.id}
                              authors={el.volumeInfo.authors || []}
                              title={el.volumeInfo.title}
                              smallThumbnail={
                                el.volumeInfo.imageLinks?.smallThumbnail || ""
                              }
                              categories={el.volumeInfo.categories || []}
                            />
                          ))}
                    </Grid>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default BooksList;
