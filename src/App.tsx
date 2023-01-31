import { Route, Routes } from "react-router-dom";
import Bookings from "./pages/Bookings/Bookings";
import Bookings2 from "./pages/Bookings/Bookings2";
import Bookings3 from "./pages/Bookings/Bookings3";
import Home from "./pages/Home/Home";
import Rental from "./pages/Rentals";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookings" element = {<Bookings/>}/>
      <Route path="/bookings2" element = {<Bookings2/>}/>
      <Route path="/bookings3" element = {<Bookings3/>}/>
      <Route path= "/rentals" element = {<Rental/>}/>
    </Routes>
  );
}

export default App;
