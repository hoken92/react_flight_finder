import FlightSearchDropdown from "./FlightSearchDropdown";
import DatePicker from "./DatePicker";
import SearchButton from "./SearchButton";
import { useNavigate } from "react-router-dom";

function Form({ cities, formData, setFormData, setFlightData }) {
  const navigate = useNavigate();
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(formData);
      // setFlightData();
      navigate("/flights");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
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
      <SearchButton />
    </form>
  );
}

export default Form;
