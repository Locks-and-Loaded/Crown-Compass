import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from "./Pages/HomePage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;

