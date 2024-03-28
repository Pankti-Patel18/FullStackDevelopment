import React, {  useState } from "react";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
// import DropDown from "./DropDown"; 
import BusStationNames from "../BusStationNames/BusStationNames.jsx"; // Assuming this file is in the same directory
import PassengerDetailForm from "./PassengerDetailForm.jsx"; // Import the component for passenger detail form
const BookingForm = () => {
  const navigate = useNavigate();

  const [fromCity, setFromCity] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [noOfPassengers, setNoOfPassengers] = useState();
  const [availableBuses, setAvailableBuses] = useState([]);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassengerForm, setShowPassengerForm] = useState(false); // State to manage whether passenger detail form should be displayed

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:8060/admin/getAll");
      setAvailableBuses(response.data);
      setShow(true);
      console.log(response.data);
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred while processing your request.");
    }
  };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  const handleFromCityChange = (selectedOption) => {
    setFromCity(selectedOption);
    if (selectedOption.value === departureCity.value) {
      setErrorMessage("Please select a different city for departure.");
    } else {
      setErrorMessage("");
    }
  };

  const handleDepartureCityChange = (selectedOption) => {
    setDepartureCity(selectedOption);
    if (selectedOption.value === fromCity.value) {
      setErrorMessage("Please select a different city for departure.");
    } else {
      setErrorMessage("");
    }
  };

  const options = BusStationNames.map((station) => ({
    value: station.city,
    label: station.city,
  }));

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handlePassengersChange = (e) => {
    setNoOfPassengers(parseInt(e.target.value));
  };

  const handleBookButtonClick = () => {
    // Logic to book the selected bus
    // For demonstration purposes, just show the passenger detail form
    // navigate("/passenger-detail");
    // setShowPassengerForm(true);
    navigate("/PassengerForm");
    // navigate("/TicketBookingForm");


  };

  return (
    <div className="form-container_bus">
      <h1>Bus Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="colom">
          <Select
            className="selectcity"
            options={options}
            value={fromCity}
            onChange={handleFromCityChange}
            placeholder="From"
          />

          <Select
            className="selectcity"
            options={options}
            value={departureCity}
            onChange={handleDepartureCityChange}
            placeholder="To"
          />
        </div>
        <div className="colom">
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            id="departureDate"
            value={departureDate}
            onChange={handleDepartureDateChange}
            className="input-form"
          />
        </div>

        <div className="colom">
          <input
            type="number"
            id="noOfPassengers"
            value={noOfPassengers}
            min="1"
            onChange={handlePassengersChange}
            placeholder="Passenger"
            className="input-form"
          />
          <button className="submitbutton" type="submit">
            Show Buses
          </button>
        </div>
        {show && (
          <div className="AvailableBuses">
            <h2>Available Buses:</h2>
            <ul>
              {availableBuses.map((bus) => (
                <li key={bus.id}>
                  {bus.busname} - {bus.busregistrationnumber} - {bus.description}
                </li>
              ))}
            </ul>
            <button onClick={handleBookButtonClick} className="bookbutton">
              Book Bus
            </button>
          </div>
        )}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      {/* Conditionally render the passenger detail form */}
      {showPassengerForm && (
        <PassengerDetailForm onClose={() => setShowPassengerForm(false)} />
        // <TicketBookingForm onClose={()=>setShowPassengerForm(false)}/>
      )}
    </div>
  );
};

export default BookingForm;
