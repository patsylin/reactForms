// SignUpForm.jsx
import React, { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);

      if (response.ok) {
        const result = await response.json();
        setToken(result.token);
      } else {
        setError("Sign-up failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  }

  return (
    <div>
      <h2>Sign Up!</h2>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
