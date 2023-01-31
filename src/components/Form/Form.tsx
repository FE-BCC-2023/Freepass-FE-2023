import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../Button/SubmitButton";

const Form = () => {
  const navigate = useNavigate();
  const [namaPembeli, setNamaPembeli] = useState("");
  const [pickupLocation, setPickupLocation] = useState("Bekasi, Jawa Barat");
  const [serviceType, setServiceType] = useState("Hourly");
  const [dropOff, setDropOff] = useState("Bekasi, Jawa Barat");
  const [pickUpDate, setPickUpDate] = useState("");
  const [hours, setHours] = useState("12");
  const [days, setDays] = useState("2");
  const [weekly, setWeekly] = useState("7");
  const [totalRent, setTotalRent] = useState(0);

  const handleChangePembeli = (e: ChangeEvent<HTMLInputElement>) => {
    setNamaPembeli(e.target.value);
  };

  const handleChangePickup = (e: ChangeEvent<HTMLSelectElement>) => {
    setPickupLocation(e.target.value);
  };

  const handleChangeService = (e: ChangeEvent<HTMLSelectElement>) => {
    setServiceType(e.target.value);
  };

  const handleDropOff = (e: ChangeEvent<HTMLSelectElement>) => {
    setDropOff(e.target.value);
  };

  const handlePickUpDate = (e: ChangeEvent<HTMLInputElement>) => {
    setPickUpDate(e.target.value);
  };

  const handleHours = (e: ChangeEvent<HTMLSelectElement>) => {
    setHours(e.target.value);
  };

  const handleDays = (e: ChangeEvent<HTMLSelectElement>) => {
    setDays(e.target.value);
  };

  const handleWeekly = (e: ChangeEvent<HTMLSelectElement>) => {
    setWeekly(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const formdata = [{
        namaPembeli,
        pickupLocation,
        serviceType,
        dropOff,
        pickUpDate,
        hours,
        days,
        weekly,
        totalRent,
        
      }];
      const res = await axios.post("http://localhost:3000/submit", formdata);
      console.log(res);
      navigate('/bookings2')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:gap-0 gap-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-evenly gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name Pemesan</label>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={(e) => handleChangePembeli(e)}
              value={namaPembeli}
              className="bg-dark rounded-lg border-white border-2 w-96 placeholder:text-white placeholder:text-sm py-2 px-6"
              placeholder="Masukan nama anda"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pickuplocation">Pickup Location</label>
            <select
              id="pickuplocation"
              name="pickuplocation"
              value={pickupLocation}
              onChange={(e) => handleChangePickup(e)}
              className="w-96 py-2 px-6 rounded-lg bg-dark text-white border-white border-2"
            >
              <option value="Bekasi, Jawa Barat">Bekasi, Jawa Barat</option>
              <option value="Surabaya, Jawa Timur">Surabaya, Jawa Timur</option>
              <option value="Padang, Sumatera Barat">Padang, Sumatera Barat</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="servicetype">Service Type</label>
            <select
              id="servicetype"
              name="servicetype"
              value={serviceType}
              onChange={(e) => handleChangeService(e)}
              className="w-96 py-2 px-6 rounded-lg bg-dark text-white border-white border-2"
            >
              <option value="Hourly">Hourly</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="dropoff">Drop Off Location</label>
            <select
              id="dropoff"
              name="dropoff"
              value={dropOff}
              onChange={(e) => handleDropOff(e)}
              className="w-96 py-2 px-6 rounded-lg bg-dark text-white border-white border-2"
            >
              <option value="Bekasi, Jawa Barat">Bekasi, Jawa Barat</option>
              <option value="Surabaya, Jawa Timur">Surabaya, Jawa Timur</option>
              <option value="Padang, Sumatera Barat">Padang, Sumatera Barat</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="pickupdate">Pickup Date</label>
            <input
              id="pickupdate"
              name="pickupdate"
              type="date"
              value={pickUpDate}
              onChange={(e) => handlePickUpDate(e)}
              className="w-96 py-2 px-6 rounded-lg bg-dark text-white border-white border-2"
            ></input>
          </div>
          {serviceType === "Hourly" && (
            <div className="flex flex-col gap-3">
              <label htmlFor="hours">Choose How Many Hours</label>
              <select
                id="hours"
                name="hours"
                value={hours}
                onChange={(e) => handleHours(e)}
                className="w-96 py-2 px-6 rounded-lg bg-dark text-white border-white border-2"
              >
                <option value="12">12 Hours</option>
                <option value="24">24 Hours</option>
              </select>
            </div>
          )}
          {serviceType === "Daily" && (
            <div className="flex flex-col gap-3">
              <label htmlFor="days">Choose How Many Days</label>
              <select
                id="days"
                name="days"
                value={days}
                onChange={(e) => handleDays(e)}
                className="w-96 py-2 px-6 rounded-lg bg-dark text-white border-white border-2"
              >
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="4">4 Days</option>
                <option value="5">5 Days</option>
                <option value="6">6 Days</option>
              </select>
            </div>
          )}
          {serviceType === "Weekly" && (
            <div className="flex flex-col gap-3">
              <label htmlFor="weeks">Choose How Many Weeks</label>
              <select
                id="weeks"
                name="weeks"
                value={weekly}
                onChange={(e) => handleWeekly(e)}
                className="w-96 py-2 px-6 rounded-lg bg-dark text-white border-white border-2"
              >
                <option value="7">1 Weeks</option>
                <option value="14">2 Weeks</option>
              </select>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <SubmitButton type="submit">Submit</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
