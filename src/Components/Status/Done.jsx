import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

export const MyContext = React.createContext("default");

const Done = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/ticket");
  };
  return (
    <div>
      <Result
        status="success"
        title="Flight tickets booked successfully! Get ready to soar!"
        subTitle=" Here is your ticket number: 2017182818828182881."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button onClick={handleButtonClick}>Ticket PDF</Button>,
        ]}
      />
    </div>
  );
};

export default Done;
