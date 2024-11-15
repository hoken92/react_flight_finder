import "./App.css";
import Form from "../components/Form";
import { cities } from "../data/Cities.jsx";

function App() {
  return (
    <>
      <Form cities={cities} />
    </>
  );
}

export default App;
