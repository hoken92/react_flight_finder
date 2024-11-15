import FlightSearchDropdown from "./FlightSearchDropdown";
import DatePicker from "./DatePicker";
import SearchButton from "./SearchButton";

function Form({ cities }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <FlightSearchDropdown
        title="Origin"
        cities={cities}
        name="originLocationCode"
      />
      <DatePicker title="Departure Date" name="departureDate" />
      <FlightSearchDropdown
        title="Destination"
        cities={cities}
        name="destinationLocationCode"
      />
      <DatePicker title="Return Date" name="returnDate" />
      <SearchButton />
    </form>
  );
}

export default Form;
