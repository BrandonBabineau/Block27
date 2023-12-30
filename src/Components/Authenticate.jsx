import { useState } from "react";

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    
  
    async function handleClick() {
        
      try {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/authenticate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
        const result = await response.json();
        setUserData(result.data); 
    
    } else {
      setError("Authentication failed. Please check your token.");
    }      } catch (error) {
        setError(error.message);
      }
    }
    
    return (
      <div>
              <h2>Authenticate</h2>
              {successMessage && <p>{successMessage}</p>}
              {error && <p>{error}</p>}
              <button onClick={handleClick}>Authenticate Token!</button>
            
      </div>
    );
  }