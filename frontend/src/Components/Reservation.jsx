import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Reservation.css";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/reservation/send",
        {
          firstName,
          lastName,
          email,
          phone,
          date,
          time,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      navigate("/success");
    } catch (error) {
    //   toast.error(error.response.data.message);
      const message =
        error.response?.data?.message || "An unexpected error occurred";
      toast.error(message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleReservation}>
        <h2>Reservation form</h2>
        <input
          type="text"
          placeholder="Enter Your First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your Email ID"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your Phone Number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Enter Date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <input
          type="time"
          placeholder="Enter Time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Reservation;
