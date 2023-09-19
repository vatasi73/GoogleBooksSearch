import { useBookDetails } from "./use-bookDetails";
import {
  Box,
  CardMedia,
  CardContent,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import StyledScroll from "./StyledScroll";
import { useSelector } from "react-redux";
import { selectBookDetailsInfo } from "./bookDetails-selectors";
import Error from "../../componets/Error/Error";
import Loading from "../../componets/Loading/Loading";

const linkStyles = {
  textDecoration: "none",
  color: "inherit",
};
export const LinkButton = styled(Button)({
  maxWidth: "40px",
  marginBottom: "2rem",
  textTransform: "none",
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
const BookDetails = () => {
  const [bookDetails] = useBookDetails();
  const { status, error } = useSelector(selectBookDetailsInfo);

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <>
          {status === "loading" ? (
            <Loading />
          ) : (
            <>
              {status === "received" && (
                <>
                  <LinkButton>
                    <Link to={"/"} style={linkStyles}>
                      Back
                    </Link>
                  </LinkButton>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(320px,500px))",
                      gap: "20px",
                      justifyContent: "center",
                    }}
                  >
                    {bookDetails?.imageLinks?.thumbnail && (
                      <Box>
                        <CardMedia
                          component="img"
                          sx={{
                            width: "100%",
                            objectFit: "cover",
                            maxHeight: "500px",
                          }}
                          image={bookDetails.imageLinks?.thumbnail || ""}
                          alt={bookDetails.title || ""}
                        />
                      </Box>
                    )}
                    <Box>
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px",
                          overflow: "scroll",
                          overflowX: "hidden",
                          maxHeight: "500px",
                          padding: 0,
                        }}
                      >
                        <Typography variant="h5" component="div">
                          {bookDetails?.title || ""}
                        </Typography>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            fontSize: "16px",
                          }}
                        >
                          {bookDetails.categories || []}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          component="div"
                          sx={{ mb: "20px" }}
                        >
                          {bookDetails.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          component="div"
                        >
                          {bookDetails.authors?.join(", ") || []}
                        </Typography>
                      </CardContent>
                    </Box>
                    <StyledScroll />
                  </Box>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default BookDetails;
