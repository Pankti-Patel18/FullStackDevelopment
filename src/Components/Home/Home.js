import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import BookingForm from "./BookingForm";

const Home = () => {
  return (
    <>
      <section>
        <header>
          <Navbar />
        </header>
        <div className="main-div">
          <BookingForm/>
        </div>
      </section>
    </>
  );
};

export default Home;