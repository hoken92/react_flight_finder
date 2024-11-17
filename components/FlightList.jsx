import FlightItem from "./FlightItem";

export default function FlightList({ formData, setFlightData }) {
  return (
    <>
      <h1>Flights</h1>
      <FlightItem formData={formData} setFlightData={setFlightData} />
    </>
  );
}
