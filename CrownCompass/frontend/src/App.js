import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";
import HairCareServices from "./Pages/HairCareServices";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
      <Router>
        <Routes>
            <Route path ="/login" element={<LoginPage />} />
            <Route path ="/home" element={<HomePage />} />
            <Route path ="/map" element={<MapPage/>} />
            <Route path ="/services" element={<HairCareServices/>} />
            <Route path ="/profile" element = {<ProfilePage/>}/>


        </Routes>
      </Router>
  );
}

export default App;

