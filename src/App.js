import React from "react";
import LandingPage from "./screens/landingPage/landingPage";
import { Routes, Route } from "react-router-dom";

import Universe from "./components/Stars/globe/universe/universe";
import WorkShops from "./screens/Workshops/Workshops";
// import UserDashboard from "./screens/UserDashboard/UserDashboard";
import { useLoader } from "./components/Loader/hook";
import Loader from "./components/Loader/loader";
import UpdateUser from "./components/User/UpdateUser/UpdateUser";
import Error from "./components/Error/Error";
import SignIn from "./components/Auth/SignIn/SignIn"
import SignUp from "./components/Auth/SignUp/SignUp"
import Login from "./components/Auth/Login/Login"

import ResetPassword from "./components/Auth/ResetPassword/ResetPassword"
import ForgetPassword from "./components/Auth/ForgetPassword/ForgetPassword"
import EmailVerify from "./components/Auth/EmailVerify/EmailVerify"
import authContext from "./components/Auth/Auth";

import FAQ from "./components/FAQ/Faq"

import AboutUs from "./screens/AboutUs/AboutUs"
import RegisterEvent from "./components/User/RegisterEvent/RegisterEvent"
import UserDashBoard from "./screens/UserDashboard/UserDashboard";
import Domains from "./screens/Domains/Domains";


function App() {
  
  const {loading} = useLoader();

  return (
    <>
    
   <Loader when={loading}/>
    {/* <Universe/> */}
      <div className="app">
        <Routes>
          
          <Route path="/error" element={<Error />} />
          <Route path="/domains" element={<Domains />} />

          <Route path="/updateuser" element={<UpdateUser />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
        {!authContext.isUserLoggedIn && (
          <Route path="/sign-in" element={<SignIn />} />
        )}
        {!authContext.isUserLoggedIn && (
          <Route path="/sign-up" element={<SignUp />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify" element={<EmailVerify />} />

        {/* <Route path="/domain" element={<Domains/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventsDetailed />} />
        <Route path="/event" element={<Event/>}/> */}

        {!authContext.isUserLoggedIn && (
          <Route path="/user-dashboard" element={<UserDashBoard />} />
        )}

        {!authContext.isUserLoggedIn && (
          <Route path="/register" element={<RegisterEvent />} />
        )}

        {/* <Route path="/add-team" element={<AddTeam />} />
        <Route path="/team" element={<Team />} /> */}
        
        {!authContext.isUserLoggedIn && (
          <Route path="/update-user" element={<UpdateUser />} />
        )}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="workshops" element={<WorkShops />} />
        <Route path="/faq" element={<FAQ />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
