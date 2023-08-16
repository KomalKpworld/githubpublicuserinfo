import React from 'react';
import './App.css';
import PublicUser from './pages/PublicUser'
import Userlogin from './components/Userlogin';
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";

const App = () => {
  return (
    <div>
        <Router>
      <Routes>
        <Route exact path="/" element={<Userlogin />} />
      <Route exact path="/user/:id" element={<PublicUser />} />
        </Routes>
        </Router>
    </div>
  );
};

export default App