import React, { useState, useEffect } from "react";
import ProfileButton from "./ProfileButton";
import Logo from "./Logo";
import "./App.css";
interface Data {
  name: string;
  age: number;
  aliases: string[];  
}
function App() {
  const [data, setData] = useState<Data>({ name: "", age: 0, aliases: [""] });
  //const host = "http://127.0.0.1:5000"
  useEffect(() => {
    fetch("/profile")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="div">
      {data.name && data.age && data.aliases ? (
        <div>
          <h1>Data from Flask</h1>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>But you can call him: {data.aliases.join(", ")}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="head-container">
        <div className="logo">
          
          <Logo/>
          
        </div>
        <div className = "nav">

        </div>
        <div className="profile">
          <ProfileButton/>
        </div>
        
      </div>
      <div className = "body-container">
        <div className="sidebar-container">
          
        </div>
        <div className = "feed-container">

        </div>
      </div>
      <div className="footer-container">
        
      </div>
    </div>
  );
}

export default App;