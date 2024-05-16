import React, { useState } from "react";
import { firestore } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import "../../css/booking.css";

export default function Booking() {
  const navigate = useNavigate();
  const { type, index } = useParams();
  const packageIndex = parseInt(index);
  const [minDate, setMinDate] = useState(new Date().toISOString().slice(0, 10));

  function formatTypeName(typeName) {
    return typeName.replace(/_/g, " ");
  }

  const packagesInfo = {
    Leisure_Tours: ["Junior Ride", "Premier Ride", "Deluxe Ride"],
    Diyathma: ["WeekDay Ride", "WeekEnd Ride", "AlongSide Ride"],
  };

  React.useEffect(() => {
    if (
      type &&
      packagesInfo[type] &&
      packageIndex >= 0 &&
      packageIndex < packagesInfo[type].length
    ) {
      setFormData((prev) => ({
        ...prev,
        package: formatTypeName(type),
        ride: packagesInfo[type][packageIndex],
      }));
    }
  }, [type, index]);

  const [formData, setFormData] = useState({
    name: "",
    telNum: "",
    date: "",
    time: "",
    adults: "",
    children: "",
    package: "",
    ride: "",
    note: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    telNum: "",
    adults: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Validations
    switch (name) {
      case "name":
        if (/\d/.test(value)) {
          setErrors((prev) => ({
            ...prev,
            name: "Name should not contain numbers.",
          }));
        } else {
          setErrors((prev) => ({ ...prev, name: "" }));
        }
        break;
      case "telNum":
        handlePhoneChange(value);
        break;
      case "date":
        if (!value) {
          setErrors((prev) => ({ ...prev, date: "Please select a date." }));
        } else {
          setErrors((prev) => ({ ...prev, date: "" }));
        }
        break;
      default:
        break;
    }
  };

  const handlePhoneChange = (inputValue) => {
    if (inputValue.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        telNum: "Please enter the telephone number.",
      }));
    } else if (!/^\d{10,}$/.test(inputValue)) {
      setErrors((prev) => ({
        ...prev,
        telNum: "Telephone number should contain at least 10 numbers.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, telNum: "" }));
    }
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

    if (parseInt(formData.adults) <= 0) {
      setErrors((prev) => ({
        ...prev,
        adults: "At least one adult must be included in the booking.",
      }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, adults: "" }));
    }

    const dateFormatted = formatDate(formData.date);
    const updatedFormData = {
      ...formData,
      date: dateFormatted,
    };

    try {
      await setDoc(doc(firestore, "Dates", dateFormatted), updatedFormData);
      setFormData({
        name: "",
        telNum: "",
        date: "",
        time: "",
        adults: "",
        children: "",
        package: "",
        ride: "",
        note: "",
      });
      navigate("/");
    } catch (error) {
      console.error("Error saving booking:", error);
    }
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
  };

  return (
    <div>
      <div className="container">
        <div className="border p-5">
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="p-lg-1 text-center bg-dark text-white mb-4">
              Choosed Package: {formData.package} -{" "}
              {formData.ride || "Select a valid package"}
            </div>
            <input
              type="text"
              name="name"
              className="form-control datetimepicker-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            {errors.name && (
              <div className="error" style={errorStyle}>
                {errors.name}
              </div>
            )}

            <input
              type="text"
              name="telNum"
              className="form-control datetimepicker-input"
              value={formData.telNum}
              onChange={handleChange}
              placeholder="Telephone Number"
              required
            />
            {errors.telNum && (
              <div className="error" style={errorStyle}>
                {errors.telNum}
              </div>
            )}
            <input
              type="date"
              name="date"
              className="form-control datetimepicker-input"
              value={formData.date}
              onChange={handleChange}
              min={minDate}
              required
            />
            <input
              type="time"
              name="time"
              className="form-control datetimepicker-input"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="adults"
              className="form-control datetimepicker-input"
              value={formData.adults}
              onChange={handleChange}
              placeholder="Number of Adults"
              min="1"
              required
            />
            {errors.adults && (
              <div className="error" style={errorStyle}>
                {errors.adults}
              </div>
            )}
            <input
              type="number"
              name="children"
              className="form-control datetimepicker-input"
              value={formData.children}
              onChange={handleChange}
              placeholder="Number of Children"
              min="0"
            />
            <textarea
              type="text"
              name="note"
              className="form-control datetimepicker-input mb-3"
              value={formData.note}
              onChange={handleChange}
              placeholder="Describe your occasion"
            />
            <button
              className="btn btn-dark w-100"
              disabled={
                !formData.name ||
                !formData.telNum ||
                !formData.adults ||
                !formData.date ||
                !!errors.name ||
                !!errors.telNum ||
                !!errors.adults ||
                !!errors.date
              }
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
