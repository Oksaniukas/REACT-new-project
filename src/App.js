import React from "react";
import MainLayout from "./Layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"; 
import MyWorks from "./Pages/MyWorks";
import Services from "./Pages/Services";
import Contacts from "./Pages/Contacts";
import LoginLayout from "./Layouts/LoginLayout";
import AboutMe from "./Pages/AboutMe";
import { LoginPage } from "./Pages/LoginPage";
import { NewUserPage } from "./Pages/NewUserPage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ <LoginLayout /> } >
          <Route index element={ <LoginPage />} />
          <Route path="/login/newuser" element={ <NewUserPage />} />

        </Route>
        <Route path="/" element={ <MainLayout /> }>
          <Route index element= { <Home /> } />
          <Route path="/aboutme" element={ <AboutMe /> } />
          <Route path="/myworks" element={ <MyWorks /> } />
          <Route path="/services" element={ <Services /> } />
          <Route path="/contacts" element={ <Contacts /> } />
          <Route path="/cart" element={ <CartPage /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
