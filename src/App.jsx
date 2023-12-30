import './App.css'
import Authenticate from "./Components/Authenticate";
import SignUpForm from "./Components/SignUpForm";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);

return (
    <>
            
      <SignUpForm token={token} setToken={setToken} />
            
      <Authenticate token={token} setToken={setToken} />
          
    </>
  );
}