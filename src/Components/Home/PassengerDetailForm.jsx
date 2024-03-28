import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

import './PassengerDetailForm.css'
const PassengerDetailForm = ({ onBookingComplete }) => {

  // const navigate = useNavigate();
  const [passengers, setPassengers] = useState([
    { passengerName: "", seatNumber: "" }, // Initial state for the first passenger
  ]);
  const [ticketNumber, setTicketNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Iterate over each passenger and book their ticket
      const tickets = await Promise.all(
        passengers.map(async (passenger) => {
          const response = await axios.post("http://localhost:8060/api/book-ticket", {
            passengerName: passenger.passengerName,
            seatNumber: passenger.seatNumber,
          });
          return response.data;

        })
      );

      // Set the ticket numbers for each passenger
      setTicketNumber(tickets.join(", ")); // Assuming ticket numbers are returned as strings
      
      // Clear any previous errors
      setError("");
    } catch (error) {
      setError("Failed to book tickets. Please try again later.");
      console.error("Booking error:", error);
    }
  };

  const handleChange = (index, key, value) => {
    const newPassengers = [...passengers];
    newPassengers[index][key] = value;
    setPassengers(newPassengers);
  };

  const addPassenger = () => {
    setPassengers([...passengers, { passengerName: "", seatNumber: "" }]);
  };

  return (
    <div className="passenger-detail-form">
      <h2>Book Ticket</h2>
      {ticketNumber ? (
        <div>
          <p>Ticket(s) booked successfully! Ticket Number(s): {ticketNumber}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {passengers.map((passenger, index) => (
            <div key={index}>
              <label htmlFor={`passengerName${index}`}>Passenger Name:</label>
              <input
                type="text"
                id={`passengerName${index}`}
                value={passenger.passengerName}
                onChange={(e) => handleChange(index, "passengerName", e.target.value)}
                required
              />
              <label htmlFor={`seatNumber${index}`}>Seat Number:</label>
              <input
                type="text"
                id={`seatNumber${index}`}
                value={passenger.seatNumber}
                onChange={(e) => handleChange(index, "seatNumber", e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addPassenger}>Add Passenger</button>
          <button type="submit">Book Ticket</button>
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default PassengerDetailForm;
