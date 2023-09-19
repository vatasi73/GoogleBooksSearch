import { Grid, Typography } from "@mui/material";

import { useBooks } from "./use-books";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import { selectAllBooks, selectBooksInfo } from "./books-selectors";
import SubmitButton from "../../componets/Button/Button";
import { useLoadMore } from "../loadMore/use-loadMore";
import {
  selectIsFirstLoad,
  selectLoadNewPage,
} from "../loadMore/loadMoreSelector";
import Loading from "../../componets/Loading/Loading";
import Error from "../../componets/Error/Error";

const BooksList = () => {
  const [updateBooks] = useBooks();
  const [handleLoadMoreClick] = useLoadMore();
  const books = useSelector(selectAllBooks);
  const loadMore = useSelector(selectLoadNewPage);
  const isFirstLoad = useSelector(selectIsFirstLoad);
  const { status, error } = useSelector(selectBooksInfo);

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <>
          {!isFirstLoad && status === "loading" ? (
            <Loading />
          ) : (
            <>
              <>
                {books && (
                  <>
                    <Typography sx={{ textAlign: "center", fontSize: "18px" }}>
                      Total books found{" " + books.totalItems}
                    </Typography>
                  </>
                )}
                {books?.totalItems !== 0 && (
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
                {isFirstLoad && status === "loading" ? (
                  <Loading />
                ) : (
                  <>
                    {status === "received" &&
                      typeof books?.totalItems === "number" &&
                      books?.totalItems >= loadMore + 30 && (
                        <SubmitButton
                          Click={handleLoadMoreClick}
                          text="Load More"
                        />
                      )}
                  </>
                )}
              </>
            </>
          )}
        </>
      )}
    </>
  );
};

export default BooksList;
