import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";
import Browse from "./Pages/Browse";  // Updated import
import HairCareServices from "./Pages/HairCareServices";
import ProfilePage from "./Pages/ProfilePage";
import VendorsPage from "./Pages/VendorsPage";
import LikesPage from "./Pages/LikesPage";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/vendors" element={<HairCareServices />} />
                <Route path="/likes"element={<LikesPage/>} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
