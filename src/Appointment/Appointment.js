import React from "react";
import "./Appointment.css";
import {
  CiCalendar,
  CiCircleChevLeft,
  CiCircleChevRight,
} from "react-icons/ci";
function Appointment() {
  return (
    <>
      <div className="appointment-container">
        <div className="fee-detail">
          <h1 className="fee-head">Appointment Fee</h1>
          <p className="fee-amount">₹699.00</p>
        </div>
        <div className="session-container">
          <div>
            <h1 className="session-title">Select your mode of session</h1>
          </div>
          <div className="hr">
            <hr />
          </div>
        </div>
        <div className="appo-method">
          <div className="method">
            <h1 className="method-head">In-Clinic</h1>
            <p className="mins">45 Mins</p>
          </div>

          <div className="method tic">
            <h1 className="method-head ticc">Video</h1>
            <p className="mins">45 Mins</p>
          </div>

          <div className="method">
            <h1 className="method-head">Chat</h1>
            <p className="mins">10 Mins</p>
          </div>
        </div>
        <div className="session-container">
          <div>
            <h1 className="session-title">Pick a Time slot</h1>
          </div>
          <div className="hr">
            <hr />
          </div>
          <div className="cal-icon">
            <CiCalendar className="c-icon" />
          </div>
        </div>
        <div className="ap-detail">
          <CiCircleChevLeft className="c-icon" />
          <div className="select-mount">
            <h1 className="select-date">Mon, 10 Oct</h1>
            <p className="slots">10 slots</p>
          </div>
          <div className="mount">
            <h1 className="date">Mon, 10 Oct</h1>
            <p className="slots-red">10 slots</p>
          </div>
          <div className="mount">
            <h1 className="date">Mon, 10 Oct</h1>
            <p className="slots-yellow">10 slots</p>
          </div>
          <CiCircleChevRight className="c-icon" />
        </div>
        <div className="time-detail">
          <h1 className="session-title">Morning</h1>
          <div className="times">
            <div className="time-card">
              <p className="time">09:00 AM</p>
            </div>
            <div className="time-card">
              <p className="time">09:30 AM</p>
            </div>
            <div className="time-card">
              <p className="time">10:00 AM</p>
            </div>
            <div className="time-card">
              <p className="time">10:15 AM</p>
            </div>
            <div className="time-card">
              <p className="time">10:45 AM</p>
            </div>
            <div className="selected time-card">
              <p className="time select">11:00 AM</p>
            </div>
          </div>
        </div>
        <div className="time-detail">
          <h1 className="session-title">Evening</h1>
          <div className="times">
            <div className="time-card">
              <p className="time">04:00 PM</p>
            </div>
            <div className="time-card">
              <p className="time">04:15 PM</p>
            </div>
            <div className="time-card">
              <p className="time">04:30 PM</p>
            </div>
            <div className="time-card">
              <p className="time">04:45 PM</p>
            </div>
            <div className="time-card">
              <p className="time">05:15 PM</p>
            </div>
            <div className="selected time-card">
              <p className="time select">11:00 AM</p>
            </div>
          </div>
        </div>
        <div className="appointment-btn">
          <button className="make-appointment-btn">Make an appointment</button>
        </div>
      </div>
    </>
  );
}

export default Appointment;
