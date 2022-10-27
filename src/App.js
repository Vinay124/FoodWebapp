import React from "react";
import Welcome from "./Components/Auth/Login/Welcome";
import LoginUser from "./Components/Auth/Login/LoginUser.jsx";
import Signup from "./Components/Auth/Login/Signup"
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Verification from './Components/Auth/Login/Verification'
import Registration from './Components/Auth/Login/Registration'
import RessetPassword from './Components/Auth/Login/RessetPassword'
import Rating from './Pages/Rating'
// home compo
import Home from "./Pages/HomeScreen/Home";
import Profile from "./Pages/Profile";
import AddAddress from "./Pages/AddAddress"
import Notification from "./Pages/Notification";
import Cart from "./Pages/Cart";
import Location from "./Pages/Location";
import Wishlist from './Pages/Wishlist'
import RecipieDetails from "./Pages/RecipieDetails";

// import Header from "./Components/Header/Header";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>} exact/>
          <Route path="/LoginUser" element={<LoginUser/>} exact/>
          <Route path="/Signup" element={<Signup/>} exact/>
          <Route path="/Verification" element={<Verification/>} exact/>
          <Route path="/Registration" element={<Registration/>} exact/>
          <Route path="/RessetPassword" element={<RessetPassword/>} exact/>
          {/* home Router */}
          <Route path="/Home" element={<Home/>} exact/>
          <Route path="/Profile" element={<Profile/>} exact/>
          <Route path="/AddAddress" element={<AddAddress/>} exact/>
          <Route path="/Rating" element={<Rating/>} exact/>
          <Route path="/Notification" element={<Notification/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Wishlist" element={<Wishlist/>}/>
          <Route path="/Location" element={<Location/>}/>
          <Route path="/RecipieDetails" element={<RecipieDetails/>}/>
          {/* test */}
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
