import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev) {
    ev.preventDefault();
    await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'}
    })
  }

  return (
    <div>
      <div className="avatar-container">
        <img
          src="https://cdn-icons-png.flaticon.com/128/552/552721.png"
          alt="Avatar"
          className="avatar"
        />
      </div>
      <form className="register" onSubmit={register}>
        <h1>Register Account</h1>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
}
