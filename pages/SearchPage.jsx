import Form from "../components/Form";
import { cities } from "../data/Cities.jsx";

function SearchPage({ formData, setFormData, setFlightData }) {
  return (
    <div id="search-container">
      <Form
        cities={cities}
        formData={formData}
        setFormData={setFormData}
        setFlightData={setFlightData}
      />
    </div>
  );
}

export default SearchPage;
