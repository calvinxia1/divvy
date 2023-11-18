import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DivyPage from "./pages/DivyPage";
import LoginPage from "./pages/LoginPage";
import { UserContextProvider } from "./context/UserContextProvider";
import CreateDivyPage from "./pages/CreateDivyPage";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path = '/homepage/divys' element = {<DivyPage/>}/>
          {/*<Route path = 'homepage/transactions' element = {<TransactionPage/>}*/}
          {/*<Route path = 'homepage/friendrequests' element = {<FriendRequestPage/>}*/}
          <Route path = '/login' element = {<LoginPage/>}/>
          <Route path = '/create/divy' element = {<CreateDivyPage/>}/>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
