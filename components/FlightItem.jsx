import { flight1 } from "../data/TestFlightdata.jsx";
import SelectButton from "./SelectButton.jsx";

export default function FlightItem({ formData, setFlightData }) {
  return (
    <div>
      {flight1.data.map((flight) => {
        return (
          <div key={flight.id}>
            <h2>Origin Flight: {formData.originLocationCode}</h2>
            <p>
              {new Date(
                flight.itineraries[0].segments[0].departure.at
              ).toUTCString()}
            </p>
            <p>{flight.itineraries[0].duration}</p>
            <h2>Return Flight: {formData.destinationLocationCode}</h2>
            <p>{flight.itineraries[1].segments[0].departure.at}</p>
            <p>{flight.itineraries[1].duration}</p>
            <p>${flight.price.total}</p>
            <SelectButton />
          </div>
        );
      })}
    </div>
  );
}
