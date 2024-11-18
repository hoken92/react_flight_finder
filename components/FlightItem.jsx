// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

export default function FlightItem({
  formData,
  flightData,
  tripData,
  setTripData,
}) {
  // const [id, setId] = useState(0);
  // const navigate = useNavigate();

  // function handleSelect() {
  //   console.log(id);
  //   console.log("handling event");
  //   flight1.data.map((flight) => {
  //     if (flight.id === id) {
  //       console.log(flight);
  //       return setTripData({ ...tripData, flight });
  //     }
  //   });
  // navigate("/mytrips");
  // }

  return (
    <div id="flight-container">
      {flightData.data.map((flight) => {
        return (
          <div className="flight-item-container" key={flight.id} id={flight.id}>
            <h2>Origin Flight: {formData.originLocationCode}</h2>
            <p className="flight-text">
              Departure time:{" "}
              {new Date(
                flight.itineraries[0].segments[0].departure.at
              ).toUTCString()}
            </p>
            <p className="flight-text">
              Duration: {flight.itineraries[0].duration}
            </p>
            <h2>Return Flight: {formData.destinationLocationCode}</h2>
            <p className="flight-text">
              Departure time:{" "}
              {new Date(
                flight.itineraries[1].segments[0].departure.at
              ).toUTCString()}
            </p>
            <p className="flight-text">
              Duration: {flight.itineraries[1].duration}
            </p>
            <p className="price-info">Price: ${flight.price.total}</p>
            <button>Select</button>
          </div>
        );
      })}
    </div>
  );
}
