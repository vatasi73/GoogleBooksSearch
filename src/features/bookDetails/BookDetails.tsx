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

const linkStyles = {
  textDecoration: "none",
  color: "inherit",
};
export const LinkButton = styled(Button)({
  minWidth: "0px",
  color: "rgba(34, 34, 34, 1)",
  backgroundColor: "none",
  textTransform: "none",
  transition: "opacity 0.5s",
  "&:hover": {
    color: "rgba(34, 34, 34, 1)",
    background: "none",
    opacity: 0.8,
    transition: "opacity 0.5s",
  },
  "& .MuiTouchRipple-root": {
    color: "rgba(34, 34, 34, 1)",
  },
});
const BookDetails = () => {
  const [bookDetails] = useBookDetails();

  return (
    <>
      <LinkButton>
        <Link to={"/"} style={linkStyles}>
          Back
        </Link>
      </LinkButton>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px,500px))",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {bookDetails.imageLinks?.thumbnail && (
          <Box>
            <CardMedia
              component="img"
              sx={{ width: "100%", objectFit: "cover" }}
              image={
                bookDetails.imageLinks?.thumbnail &&
                bookDetails.imageLinks?.thumbnail
              }
              alt={bookDetails.title && bookDetails.title}
            />
          </Box>
        )}

        <Box>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <Typography variant="h5" component="div">
              {bookDetails.title && bookDetails.title}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: "16px",
              }}
            >
              {bookDetails.categories && bookDetails.categories}
            </Typography>
            <Typography variant="body1" color="text.secondary" component="div">
              {bookDetails.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary" component="div">
              {bookDetails.authors && bookDetails.authors.join(", ")}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </>
  );
};

export default BookDetails;
