export default function Header() {
  return (
    <header>
      <a href className="logo">
        My blog
      </a>
      <nav>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
    </header>
  );
}
