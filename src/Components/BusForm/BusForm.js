import React, { useState } from "react";
import "./BusForm.css";
import axios from "axios";

const BusForm = ({ onAddBus }) => {
  const [busname, setName] = useState("");
  const [busregistrationnumber, setRegistrationNumber] = useState("");
  const [description, setDescription] = useState("");
  const [totalseats, setTotalSeats] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // onAddBus({
    //   name,
    //   description,
    //   totalSeats,
    // });
    setName("");
    setRegistrationNumber("");
    setDescription("");
    setTotalSeats(0);

    const response = await axios.post("http://localhost:8060/admin/add", {
      busname,
      busregistrationnumber,
      description,
      totalseats,
    });
    console.log(response.data);
  };

  return (
    <div className="body_bus">
      <form onSubmit={handleSubmit} className="bus-form">
        <h2>Add Bus</h2>
        <div className="form-group-Seats">
          <div>
            <label className="label" htmlFor="name">
              Bus Name
            </label>
            <input
              className="input"
              type="text"
              id="name"
              value={busname}
              placeholder="Add Bus Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="RegistrationNumber">
              Bus RegistrationNumber
            </label>
            <input
              className="input"
              type="text"
              id="registrationNumber"
              value={busregistrationnumber}
              placeholder="Add Registration Number"
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group-Seats">
          <label className="des" htmlFor="description">
            Bus Description
          </label>
          <textarea
            id="description"
            value={description}
            placeholder="Add Description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group-Seats">
          <div>
            <label className="label" htmlFor="totalSeats">
              Total Seats
            </label>
            <input
              className="input"
              type="number"
              id="totalSeats"
              value={totalseats}
              onChange={(e) => setTotalSeats(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Add Bus</button>
      </form>
    </div>
  );
};

export default BusForm;
