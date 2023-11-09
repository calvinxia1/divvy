import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DivyPage from "./pages/DivyPage";
import Login from "./pages/Login";
import { UserContextProvider } from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path = '/homepage/divys' element = {<DivyPage/>}/>
          {/*<Route path = 'homepage/transactions' element = {<TransactionPage}/>*/}
          <Route path = '/login' element = {<Login/>}/>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
