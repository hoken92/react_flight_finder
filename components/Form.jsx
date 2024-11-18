import FlightSearchDropdown from "./FlightSearchDropdown.jsx";
import DatePicker from "./DatePicker.jsx";
import SearchButton from "./SearchButton.jsx";
import Input from "./Input.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form({ cities, formData, setFormData, setFlightData }) {
  const navigate = useNavigate();
  const config = {
    headers: { Authorization: `Bearer ${import.meta.env.VITE_BEARER}` },
  };

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);
      const res = await axios.get(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${formData.originLocationCode}&destinationLocationCode=${formData.destinationLocationCode}&departureDate=${formData.departureDate}&returnDate=${formData.returnDate}&adults=${formData.adults}&max=30`,
        config
      );
      console.log(res.data);
      setFlightData(res.data);
      navigate("/flights");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <h2>Form</h2>
      <FlightSearchDropdown
        title="Origin"
        cities={cities}
        name="originLocationCode"
        handleChange={handleChange}
      />
      <DatePicker
        title="Departure Date"
        name="departureDate"
        handleChange={handleChange}
      />
      <FlightSearchDropdown
        title="Destination"
        cities={cities}
        name="destinationLocationCode"
        handleChange={handleChange}
      />
      <DatePicker
        title="Return Date"
        name="returnDate"
        handleChange={handleChange}
      />
      <Input title="Adults:" name="adults" handleChange={handleChange} />
      <SearchButton />
    </form>
  );
}

export default Form;
