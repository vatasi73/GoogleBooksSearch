import { Container } from "@mui/material";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./componets/Loading/Loading";

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
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/details/:id"
            element={
              <Suspense fallback={<Loading />}>
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
