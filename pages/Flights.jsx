import FlightItem from "../components/FlightItem";

export default function FlightList({
  formData,
  flightData,
  tripData,
  setTripData,
}) {
  return (
    <div>
      <h2 id="flight-title">Flights</h2>
      <FlightItem
        formData={formData}
        flightData={flightData}
        tripData={tripData}
        setTripData={setTripData}
      />
    </div>
  );
}
