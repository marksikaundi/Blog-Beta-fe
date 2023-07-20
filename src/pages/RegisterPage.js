import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // async function register(ev) {
  //   ev.preventDefault();
  //   await fetch('http://localhost:4000', {
  //     method: 'POST',
  //     body: JSON.stringify({username, password}),
  //     headers: {'Content-Type':'application/json'}
  //   })
  // }
  async function register(ev) {
    ev.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // Registration successful, you can perform any additional actions here
        console.log('Registration successful!');
      } else {
        // Handle error response here
        console.error('Registration failed!');
      }
    } catch (error) {
      // Handle network errors or other exceptions here
      console.error('Error occurred during registration:', error);
    }
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
