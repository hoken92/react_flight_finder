import Form from "../components/Form";
import { cities } from "../data/Cities.jsx";

function SearchPage({ formData, setFormData, setFlightData }) {
  return (
    <>
      <Form
        cities={cities}
        formData={formData}
        setFormData={setFormData}
        setFlightData={setFlightData}
      />
    </>
  );
}

export default SearchPage;
