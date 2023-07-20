import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        My blog
      </Link>
      <nav>
        <Link to="/features">Features</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
