import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Pages Component/Footer";
import Container from "../../components/Container";
import Form from "../../components/Form/Form";
import { Link } from "react-router-dom";

const Bookings = () => {
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Container>
        <div className="rounded-2xl bg-bookings-bg bg-cover w-[75vw] md:w-[85vw] lg:w-[90vw] h-[50vh] mx-auto">
          <div className="flex justify-center my-auto">
            <h1 className="font-semibold text-4xl lg:text-6xl my-24">
              Booking
            </h1>
          </div>
        </div>
        <div className="rounded-2xl bg-[#252525] flex flex-row my-8 py-4 justify-around">
          <div className="flex flex-col text-center justify-evenly gap-4">
            <Link to="/bookings">
              <div className="rounded-full bg-white text-black w-[50px] py-3 mx-auto">
                <h1 className="font-bold font-xl">1</h1>
              </div>
            </Link>
            <h1>Enter Ride Details</h1>
          </div>
          <div className="flex flex-col text-center justify-evenly gap-4">
            <Link to="/bookings2">
              <div className="rounded-full bg-[#5B5B5B] text-white w-[50px] py-3  mx-auto">
                <h1 className="font-bold font-xl">2</h1>
              </div>
            </Link>
            <h1>Choose a Vehicle</h1>
          </div>
          <div className="flex flex-col text-center justify-evenly gap-4">
              <div className="rounded-full bg-[#5B5B5B] text-white w-[50px] py-3  mx-auto">
                <h1 className="font-bold font-xl">3</h1>
              </div>
            <h1>Booking Summary</h1>
          </div>
        </div>
        <Form />
      </Container>
      <Footer />
    </div>
  );
};

export default Bookings;
