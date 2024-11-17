import { Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import NotFound from "../pages/NotFound";
import NavBar from "../components/Navbar";
import FlightList from "../components/FlightList";
import MyTrips from "../pages/MyTrips";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    originLocationCode: "",
    departureDate: "",
    destinationLocationCode: "",
    returnDate: "",
  });

  const [flightData, setFlightData] = useState({});
  const [tripData, setTripData] = useState(null);

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              formData={formData}
              setFormData={setFormData}
              setFlightData={setFlightData}
            />
          }
        />
        <Route
          path="/flights"
          element={
            <FlightList formData={formData} setFlightData={setFlightData} />
          }
        />

        <Route path="/mytrips" element={<MyTrips tripData={tripData} />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
