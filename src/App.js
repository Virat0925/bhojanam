import React, { useEffect, useState } from "react";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

function App() {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
     user : "Guest👤"
    } 
    setUserName(data.user)
  },[])
  
  return (
    <div className="App">
      <UserContext.Provider value={{ loggedIn: userName, setUserName }}>
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
