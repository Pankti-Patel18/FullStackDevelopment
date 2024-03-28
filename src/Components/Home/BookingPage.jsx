import React, { useState } from "react";
import PassengerDetailForm from "./PassengerDetailForm";
import TicketConfirmation from "./TicketConfirmation"; // Import your TicketConfirmation component

const BookingPage = () => {
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleBookingComplete = () => {
    // Set booking complete to true when the ticket is successfully booked
    setBookingComplete(true);
  };

  return (
    <div>
      {/* Render PassengerDetailForm when booking is not complete */}
      {!bookingComplete && <PassengerDetailForm onBookingComplete={handleBookingComplete} />}

      {/* Render TicketConfirmation when booking is complete */}
      {bookingComplete && <TicketConfirmation />}
    </div>
  );
};

export default BookingPage;
