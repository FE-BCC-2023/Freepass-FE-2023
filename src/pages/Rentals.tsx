import axios from "axios";
import { useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar/Navbar";
import s63 from "../assets/s63.png";
import q3 from "../assets/q3.png";
import series2 from "../assets/series2.png";
import gr86 from "../assets/gr86.png";
import mazda3 from "../assets/mazda3.png";
import success from "../assets/success.png";
import Footer from "../components/Pages Component/Footer";
import Button from "../components/Button/Button";

const Rental = () => {
  const [data, setData] = useState<any[]>([]);

  axios
    .get("http://localhost:3000/data")
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Container>
        <div className="rounded-2xl bg-bookings-bg bg-cover w-[75vw] md:w-[85vw] lg:w-[90vw] h-[50vh] mx-auto">
          <div className="flex justify-center my-auto">
            <h1 className="font-semibold text-4xl lg:text-6xl my-24">
              Your Rentals
            </h1>
          </div>
        </div>
        {data.length === 0 ? (
          <div className="rounded-2xl bg-[#252525] flex flex-row my-8 py-4 justify-around">
            <h1 className="text-2xl text-center">
              Belum ada pesanan yang diterima
            </h1>
          </div>
        ) : (
          <div className="rounded-2xl bg-[#252525] flex flex-row justify-around my-8 py-4 h-[200px] gap">
            {data.map((d) => (
              <div className="flex flex-row justify-between gap-4">
                {selectionCars(d)}
                <div className="flex flex-col justify-evenly">
                  <h1 className="font-semibold">
                    Nama Pemesan : {d.namaPembeli}
                  </h1>
                  <h1 className="font-semibold">Car Type : {d.selectedCars}</h1>
                  <h1 className="font-semibold">
                    Service Type : {d.serviceType}
                  </h1>
                  <div className="flex flex-row gap-2 font-semibold">
                    <h1>Time Rent : </h1>
                    {selectionTimes(d)}
                  </div>
                </div>
              </div>
            ))}
            <img className="my-auto" src={success} alt="missing img" />
          </div>
        )}
        <div className="flex justify-center">
          <Button direct="/">Back to Home</Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Rental;

function selectionCars(d: any) {
  switch (d.selectedCars) {
    case "Mercedes-Benz S63 AMG":
      return <img src={s63} alt="missing cars" />;
      break;
    case "Audi Q3":
      return <img src={q3} alt="missing cars" />;
      break;
    case "BMW 2 Series Coupe":
      return <img src={series2} alt="missing cars" />;
      break;
    case "Toyota GR 86":
      return <img src={gr86} alt="missing cars" />;
      break;
    case "Mazda 3 Hatchback":
      return <img src={mazda3} alt="missing cars" />;
      break;
  }
}

function selectionTimes(d: any) {
  switch (d.serviceType) {
    case "Hourly":
      return <h4 className="font-semibold">{d.hours} Hours</h4>;
      break;
    case "Daily":
      return <h4 className="font-semibold">{d.daily} Days</h4>;
      break;
    case "Weekly":
      return <h4 className="font-semibold">{d.weekly} Weeks</h4>;
      break;
  }
}
