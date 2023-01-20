import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Country from "./Components/Country/Country";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country:id" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
