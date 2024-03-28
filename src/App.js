import './App.css';
import React from 'react';
import Loginform from './Components/Loginform/Loginform'
import BusForm from './Components/BusForm/BusForm'
// import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AdminBuses from './Components/Admin/AdminBuses';
import TicketDownload from './Components/Ticket/TicketDownload';
import DropDown from './Components/Home/DropDown'
import PassengerDetailForm from './Components/Home/PassengerDetailForm';

  
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Loginform />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/admin" element={<BusForm />} />
          <Route path="/reg" element={<Login />} />
          <Route path="/ad" element={<AdminBuses/>} />

          <Route path="/ticket" element={<TicketDownload />} />
          <Route path="/dropdown" element={<DropDown />} />
          <Route path="/PassengerForm" element={<PassengerDetailForm />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
