import FlightSearchDropdown from "./FlightSearchDropdown";
import DatePicker from "./DatePicker";
import SearchButton from "./SearchButton";

function Form({ cities, formData, setFormData }) {
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
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
