import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Bookings from "./pages/Home/Bookings";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookings" element = {<Bookings/>}/>
    </Routes>
  );
}

export default App;
