import React, { useState } from "react";
import { message, Steps, theme } from "antd";
import Ticket from "./Ticket";
import Verifcation from "./Verifcation";
import Payment from "./Payment";
import Done from "./Done";
import "./Status.css";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import {
  SmileOutlined,
  SolutionOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const ShowStatus = ({ setOpen, price }) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: (
        <span style={{ display: "flex", alignItems: "center" }}>
          Ticket
          <hr
            style={{
              marginLeft: "5px",
              width: "5rem",
              borderWidth: "2px",
            }}
          />
        </span>
      ),
      status: "finish",
      icon: <AirlineSeatReclineNormalIcon />,
      content: <Ticket price={price} />,
    },
    {
      title: (
        <span style={{ display: "flex", alignItems: "center" }}>
          Verification
          <hr
            style={{
              marginLeft: "5px",
              width: "5rem",
              borderWidth: "2px",
            }}
          />
        </span>
      ),
      status: current <= 0 ? "wait" : "finish",
      icon: <SolutionOutlined />,
      content: <Verifcation />,
    },
    {
      title: (
        <span style={{ display: "flex", alignItems: "center" }}>
          Pay
          <hr
            style={{
              marginLeft: "5px",
              width: "5rem",
              borderWidth: "2px",
            }}
          />
        </span>
      ),
      icon: current <= 1 ? <LoadingOutlined /> : "",
      status: current <= 1 ? "wait" : "finish",
      //   status: "process",
      content: <Payment />,
    },
    {
      title: "Done",
      status: current <= 2 ? "wait" : "finish",
      icon: <SmileOutlined />,
      content: <Done />,
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  //   const items = steps.map((item) => ({
  //     key: item.title,
  //     title:  <span >{item.title}</span>,
  //   }));

  const contentStyle = {
    maxHeight: "400px",
    textAlign: "center",
    color: token.colorTextTertiary,
    marginTop: 16,
    // backgroundColor: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
  };
  return (
    <>
      <Steps current={current} items={steps} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div className="d-flex justify-content-between">
        <div className="mt-2">
          {current < steps.length - 1 && (
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => next()}
            >
              Next
            </button>
          )}
          {current === steps.length - 1 && (
            <button
              type="button"
              className="btn btn-success me-2"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </button>
          )}
          {current > 0 && (
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => prev()}
            >
              Previous
            </button>
          )}
        </div>
        <div className="mt-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={setOpen}
            //   disabled
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
export default ShowStatus;
