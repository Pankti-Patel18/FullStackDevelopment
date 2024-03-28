import React, { useState } from "react";

const Content = ({ keyProp }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <div
        key={keyProp}
        className="d-flex flex-column "
        style={{ height: "5rem" }}
      >
        <h6 className="d-flex ">Person {keyProp + 1}</h6>
        <div key={keyProp} className="d-flex mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            style={{ width: "10rem" }}
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type="number"
            className="form-control ms-4"
            placeholder="Age"
            style={{ width: "10rem" }}
            value={age}
            onChange={handleAgeChange}
            required
          />
        </div>
      </div>
    </>
  );
};

export default Content;
