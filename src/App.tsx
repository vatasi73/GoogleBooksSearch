import { Container } from "@mui/material";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const DetailsPage = React.lazy(() => import("./pages/DetailsPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: "2rem",
          mt: "2rem",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"Гружу"}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/details/:id"
            element={
              <Suspense fallback={"Гружу"}>
                <DetailsPage />
              </Suspense>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
