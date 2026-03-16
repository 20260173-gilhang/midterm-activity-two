import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <h2>Student Registration</h2>

      <Link to="/home">Home</Link> | 
      <Link to="/register">Register</Link>

    </nav>
  );
}

export default Navbar;