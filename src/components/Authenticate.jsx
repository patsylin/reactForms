// Authenticate.jsx
import React, { useState } from "react";

export default function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [userData, setUserData] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        setSuccessMessage(result.message);

        // Store user data for displaying username
        setUserData(result.data);
      } else {
        setError("Authentication failed. Token may be invalid.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {error && <p>Error: {error}</p>}
      {successMessage && <p>Success: {successMessage}</p>}
      {userData && <p>Logged in as: {userData.username}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}
