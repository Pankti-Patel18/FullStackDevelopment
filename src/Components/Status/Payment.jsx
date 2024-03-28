import React from "react";
import { useState } from "react";

const Payment = () => {
  const [value, setValue] = useState();
  return (
    <>
      <section className="d-flex justify-content-center">
        <div
          className="card  my-4"
          style={{
            width: "85%",
            background: "#01088f",
            // background: "rgb(113,154,204) linear-gradient(180deg, rgba(113,154,204,1) 0%, rgba(1,8,143,1) 100%)",
          }}
        >
          <div className="card-body">
            <h5 className="text-light">Payment</h5>
            <form>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <div className="Data">
                  <label
                    className="d-flex text-light ms-1 mb-1"
                    htmlFor="typeText"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="typeText"
                    className="form-control  "
                    size="17"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="1234 5678 9012 3457"
                    minLength="19"
                    maxLength="19"
                  />
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="visa"
                    width="32px"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="visa"
                    width="32px"
                  />
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="visa"
                    width="32px"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-1">
                <div className="Data">
                  <label
                    className="d-flex text-light ms-1 mb-1"
                    htmlFor="typeText"
                  >
                    Cardholder's Name
                  </label>
                  <input
                    type="text"
                    id="typeName"
                    className="form-control form-control"
                    size="17"
                    placeholder="Cardholder's Name"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center pb-2">
                <div className="Data">
                  <label
                    className="d-flex text-light ms-1 mb-1"
                    htmlFor="typeText"
                  >
                    Expiration
                  </label>
                  <input
                    type="text"
                    id="typeExp"
                    className="form-control"
                    placeholder="MM/YYYY"
                    size="12"
                    minLength="7"
                    maxLength="7"
                  />
                </div>
                <div className="Data">
                  <label
                    className="d-flex text-light ms-1 mb-1"
                    htmlFor="typeText"
                  >
                    CVV
                  </label>
                  <input
                    type="password"
                    id="typeText2"
                    className="form-control"
                    placeholder="123"
                    size="2"
                    minLength="3"
                    maxLength="3"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
