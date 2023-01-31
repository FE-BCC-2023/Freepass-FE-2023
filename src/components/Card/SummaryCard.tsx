import axios from "axios";
import React, { useState, useEffect } from "react";

const SummaryCard = () => {
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
    <div className="bg-[#252525] px-8 py-4 rounded-lg w-[300px] flex flex-col justify-evenly gap-8">
      <h1 className="font-semibold text-lg">Summary</h1>
      {data.map((d) => (
        <>
          <div className="flex flex-col justify-evenly gap-2">
            <h6 className="font-light text-sm">Service Type</h6>
            <h4 className="font-semibold">{d.serviceType}</h4>
            <h6 className="font-light text-sm">Pickup Location</h6>
            <h4 className="font-semibold">{d.pickupLocation}</h4>
            <h6 className="font-light text-sm">Drop Off Location</h6>
            <h4 className="font-semibold">{d.dropOff}</h4>
            <h6 className="font-light text-sm">Pickup Date</h6>
            <h4 className="font-semibold">{d.pickUpDate}</h4>
            <h6 className="font-light text-sm">Total Time</h6>
            {d.serviceType === "Hourly" && (
              <h4 className="font-semibold">{d.hours} Hours</h4>
            )}
            {d.serviceType === "Days" && (
              <h4 className="font-semibold">{d.days} Days</h4>
            )}
            {d.serviceType === "Weekly" && (
              <h4 className="font-semibold">{d.weekly} Days</h4>
            )}
          </div>
          <h1 className="font-semibold text-lg">
            Total : {d.totalRent.toLocaleString("en-US")}
          </h1>
        </>
      ))}
    </div>
  );
};

export default SummaryCard;
