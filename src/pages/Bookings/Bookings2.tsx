import { Link, useNavigate } from "react-router-dom";
import SummaryCard from "../../components/Card/SummaryCard";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Pages Component/Footer";
import axios from "axios";
import { useState } from "react";
import Button from "../../components/Button/Button";
import SubmitButton from "../../components/Button/SubmitButton";
import s63 from "../../assets/s63.png";
import q3 from "../../assets/q3.png";
import series2 from "../../assets/series2.png";
import gr86 from "../../assets/gr86.png";
import mazda3 from "../../assets/mazda3.png";

const Bookings2 = () => {
  const [data, setData] = useState<any[]>([]);
  const [totalRent, setTotalRent] = useState(0);
  const [selectedCars, setSelectedCars] = useState("");
  const navigate = useNavigate();

  axios
    .get("http://localhost:3000/data")
    .then((response) => {
      setData(response.data);
      setTotalRent(response.data.totalRent);
    })
    .catch((error) => {
      console.error(error);
    });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const newData = [{ ...data[0], totalRent, selectedCars }];
      setData(newData);
      const res = await axios.post("http://localhost:3000/submit", newData);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    navigate('/bookings3')
  };

  const handleCarOptions = (cars: string, rent: number) => {
    setSelectedCars(cars);
    setTotalRent(rent);
  };

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
              <div className="rounded-full bg-[#5B5B5B] text-white w-[50px] py-3 mx-auto">
                <h1 className="font-bold font-xl">1</h1>
              </div>
            </Link>
            <h1>Enter Ride Details</h1>
          </div>
          <div className="flex flex-col text-center justify-evenly gap-4">
            <Link to="/bookings2">
              <div className="rounded-full bg-white text-black w-[50px] py-3  mx-auto">
                <h1 className="font-bold font-xl">2</h1>
              </div>
            </Link>
            <h1>Choose a Vehicle</h1>
          </div>
          <div className="flex flex-col text-center justify-evenly gap-4">
            <Link to="/bookings3">
              <div className="rounded-full bg-[#5B5B5B] text-white w-[50px] py-3  mx-auto">
                <h1 className="font-bold font-xl">3</h1>
              </div>
            </Link>
            <h1>Booking Summary</h1>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-0 justify-between">
          <div>
            <SummaryCard />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex lg:flex-row flex-col justify-evenly gap-12">
                <img src={s63} alt="missing img" />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <h6 className="text-lg">Mercedes-Benz S63 AMG</h6>
                    <h3 className="text-3xl font-bold">Rp. 5,000,000</h3>
                    <p className="text-[8px]">
                      *Harga tertera berdasarkan hari ( per 24 jam ) rental
                    </p>
                  </div>
                  <Link className="font-semibold" to="/">
                    More info
                  </Link>
                </div>
                <button
                  className="flex justify-start"
                  onClick={() =>
                    handleCarOptions("Mercedes-Benz S63 AMG", 5_000_000)
                  }
                >
                  <SubmitButton>Select</SubmitButton>
                </button>
              </div>
              <hr
                style={{
                  borderTop: "white dashed 1px",
                }}
              />
              <div className="flex lg:flex-row flex-col justify-evenly gap-12">
                <img src={q3} alt="missing img" />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <h6 className="text-lg">Audi Q3</h6>
                    <h3 className="text-3xl font-bold">Rp. 3,500,000</h3>
                    <p className="text-[8px]">
                      *Harga tertera berdasarkan hari ( per 24 jam ) rental
                    </p>
                  </div>
                  <Link className="font-semibold" to="/">
                    More info
                  </Link>
                </div>
                <button
                  className="flex justify-start"
                  onClick={() => handleCarOptions("Audi Q3", 3_500_000)}
                >
                  <SubmitButton>Select</SubmitButton>
                </button>
              </div>
              <hr
                style={{
                  borderTop: "white dashed 1px",
                }}
              />
              <div className="flex lg:flex-row flex-col justify-evenly gap-12">
                <img src={series2} alt="missing img" />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <h6 className="text-lg">BMW 2 Series Coupe</h6>
                    <h3 className="text-3xl font-bold">Rp. 5,500,000</h3>
                    <p className="text-[8px]">
                      *Harga tertera berdasarkan hari ( per 24 jam ) rental
                    </p>
                  </div>
                  <Link className="font-semibold" to="/">
                    More info
                  </Link>
                </div>
                <button
                  className="flex justify-start"
                  onClick={() =>
                    handleCarOptions("BMW 2 Series Coupe", 5_500_000)
                  }
                >
                  <SubmitButton>Select</SubmitButton>
                </button>
              </div>
              <hr
                style={{
                  borderTop: "white dashed 1px",
                }}
              />
              <div className="flex lg:flex-row flex-col justify-evenly gap-12">
                <img src={gr86} alt="missing img" />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <h6 className="text-lg">Toyota GR 86</h6>
                    <h3 className="text-3xl font-bold">Rp. 4,000,000</h3>
                    <p className="text-[8px]">
                      *Harga tertera berdasarkan hari ( per 24 jam ) rental
                    </p>
                  </div>
                  <Link className="font-semibold" to="/">
                    More info
                  </Link>
                </div>
                <button
                  className="flex justify-start"
                  onClick={() => handleCarOptions("Toyota GR 86", 4_000_000)}
                >
                  <SubmitButton>Select</SubmitButton>
                </button>
              </div>
              <hr
                style={{
                  borderTop: "white dashed 1px",
                }}
              />
              <div className="flex lg:flex-row flex-col justify-evenly gap-12">
                <img src={mazda3} alt="missing img" />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <h6 className="text-lg">Mazda 3 Hatchback</h6>
                    <h3 className="text-3xl font-bold">Rp. 2,500,000</h3>
                    <p className="text-[8px]">
                      *Harga tertera berdasarkan hari ( per 24 jam ) rental
                    </p>
                  </div>
                  <Link className="font-semibold" to="/">
                    More info
                  </Link>
                </div>
                <button
                  className="flex justify-start"
                  onClick={() =>
                    handleCarOptions("Mazda 3 Hatchback", 2_500_000)
                  }
                >
                  <SubmitButton>Select</SubmitButton>
                </button>
              </div>
              <hr
                style={{
                  borderTop: "white dashed 1px",
                }}
              />
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Bookings2;
