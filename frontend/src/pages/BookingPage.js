import React, { useState } from "react";
import { firestore } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import Heading from "../components/common/Heading";
import "../css/booking.css";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    nic: "",
    telNum: "",
    date: "",
    time: "",
    adults: 0,
    children: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = ("0" + d.getDate()).slice(-2);
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dateFormatted = formatDate(formData.date);
    const updatedFormData = {
      ...formData,
      date: dateFormatted,
    };

    try {
      await setDoc(doc(firestore, "Dates", dateFormatted), updatedFormData);
      console.log("Booking saved:", updatedFormData);
      alert("Booking saved successfully!");
      // Reset the form or redirect the user
      setFormData({
        name: "",
        nic: "",
        telNum: "",
        date: "",
        time: "",
        adults: 0,
        children: 0,
      });
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to save booking.");
    }
  };

  return (
    <>
      <Heading heading="Booking" title="Home" subtitle="Booking" />
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="nic"
          value={formData.nic}
          onChange={handleChange}
          placeholder="NIC Number"
          required
        />
        <input
          type="tel"
          name="telNum"
          value={formData.telNum}
          onChange={handleChange}
          placeholder="Telephone Number"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="adults"
          value={formData.adults}
          onChange={handleChange}
          placeholder="Number of Adults"
          min="0"
        />
        <input
          type="number"
          name="children"
          value={formData.children}
          onChange={handleChange}
          placeholder="Number of Children"
          min="0"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
