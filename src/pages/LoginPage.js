export default function LoginPage() {
  return (
    <div>
      <div className="avatar-container">
        <img
          src="https://cdn-icons-png.flaticon.com/128/552/552721.png"
          alt="Avatar"
          className="avatar"
        />
      </div>
      <form className="login">
        <h1>Login Account</h1>
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <button>Login</button>
      </form>
    </div>
  );
}
