import { Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import NotFound from "../pages/NotFound";
import MyTrips from "../pages/MyTrips";
import NavBar from "../components/Navbar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/trips" element={<MyTrips />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
