import FlightItem from "../components/FlightItem";

export default function FlightList({
  formData,
  flightData,
  tripData,
  setTripData,
}) {
  return (
    <div>
      <h1>Flights</h1>
      <FlightItem
        formData={formData}
        flightData={flightData}
        tripData={tripData}
        setTripData={setTripData}
      />
    </div>
  );
}
