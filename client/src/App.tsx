import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { UserContextProvider } from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path = '/homepage' element = {<HomePage/>}/>
          <Route path = '/login' element = {<Login/>}/>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
