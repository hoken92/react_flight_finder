import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navbar">
      <Link to="/" className="nav-item">
        Search Flights
      </Link>
      {/* <Link to="/mytrips">Trips</Link> */}
    </nav>
  );
}

export default NavBar;
