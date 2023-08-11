import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </div>
  );
}
