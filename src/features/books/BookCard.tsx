import React from "react";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const linkStyles = {
  textDecoration: "none",
  color: "inherit",
};

type Props = {
  authors: string[];
  title: string;
  smallThumbnail: string;
  categories: string[];
  id: string;
};

const BookCard: React.FC<Props> = ({
  authors,
  title,
  smallThumbnail,
  categories,
  id,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 260px))",
        }}
      >
        <Card>
          <Link to={`/details/${id}`} style={linkStyles}>
            <CardMedia
              component="img"
              image={smallThumbnail || ""}
              title={title}
              sx={{
                height: 180,
                background: "rgba(78, 78, 78, 1)",
                backgroundSize: "cover",
              }}
            />
            <CardContent
              sx={{
                display: "grid",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {!categories || "" ? (
                <Box sx={{ height: "10px", mb: 1.5 }} />
              ) : (
                <Typography
                  sx={{
                    height: "10px",
                    mb: 1.5,
                    fontSize: "14px",
                    color: "rgba(78, 78, 78, 1)",
                  }}
                >
                  {categories[0] || ""}
                </Typography>
              )}
              <Divider />
              <Typography sx={{ mb: 1.5, fontSize: "16px", lineHeight: "1em" }}>
                {title}
              </Typography>

              <Typography component="h3" sx={{ color: "rgba(78, 78, 78, 1)" }}>
                {authors || ""}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </Box>
    </>
  );
};

export default BookCard;
