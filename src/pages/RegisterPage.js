export default function RegisterPage() {
  return (
    <div>
      <div className="avatar-container">
        <img
          src="https://cdn-icons-png.flaticon.com/128/552/552721.png"
          alt="Avatar"
          className="avatar"
        />
      </div>
      <form className="register">
        <h1>Register Account</h1>
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <button>Register</button>
      </form>
    </div>
  );
}
