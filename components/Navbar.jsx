import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Search Flights</Link>
      <Link to="/trips">Trips</Link>
    </nav>
  );
}

export default NavBar;
