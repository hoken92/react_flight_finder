import { useState } from "react";
import Form from "../components/Form";
import { cities } from "../data/Cities.jsx";

function SearchPage() {
  const [formData, setFormData] = useState({});
  return (
    <>
      <Form cities={cities} formData={formData} setFormData={setFormData} />
    </>
  );
}

export default SearchPage;
