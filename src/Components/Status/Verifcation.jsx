import React, { useState } from "react";
import { Container } from "react-bootstrap";

const flightsData = [
  {
    name: "Meet Parmar",
    age: 19,
    category: "Bus",
    price: 450,
  },
    
    {
      name: "Nirj Naist",
      age: 19,
      category: "Bus",
      price: 500,
    },
    {
      name: "Dhruv Solanki",
      age: 19,
      category: "Bus",
      price: 450,
    },
];

const Verifcation = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    flightsData.forEach((flight) => {
      total += flight.price;
    });
    setTotalPrice(total);
  };
  useState(() => {
    calculateTotalPrice();
  }, []);
  return (
    <Container className="bg-white " style={{ height: "330px" }}>
      <div className="table-responsive ">
        <table className="table">
          <thead>
            <tr className="text-center" style={{ maxWidth: "auto" }}>
              <th className="text-black">Name</th>
              <th className="text-black">Age</th>
              <th className="text-black">Category</th>
              <th className="text-black">Price (Rs)</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {flightsData.map((flight) => (
              <tr key={flight.flightNumber}>
                <td>{flight.name}</td>
                <td>{flight.age}</td>
                <td>{flight.category}</td>
                <td>{flight.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-black d-flex  justify-content-end my-1">
        <span className="align-middle text-black" style={{ fontWeight: "500" }}>
          Total : {totalPrice} Rs
        </span>
      </div>
    </Container>
  );
};

export default Verifcation;
