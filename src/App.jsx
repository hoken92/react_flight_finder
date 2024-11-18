import { Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import NotFound from "../pages/NotFound";
import NavBar from "../components/Navbar";
import Flights from "../pages/Flights";
import MyTrips from "../pages/MyTrips";
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    originLocationCode: "",
    departureDate: "",
    destinationLocationCode: "",
    returnDate: "",
    adults: "1",
  });

  const [flightData, setFlightData] = useState({});
  const [tripData, setTripData] = useState({});

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
            <Flights
              formData={formData}
              flightData={flightData}
              tripData={tripData}
              setTripData={setTripData}
            />
          }
        />

        <Route path="/mytrips" element={<MyTrips tripData={tripData} />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
