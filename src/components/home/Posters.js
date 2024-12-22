import React, { useState } from "react";
import { posters } from "../data/PostersData"; // Import posters data
import Slider from "react-slick"; // Import slider component
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles

export default function Posters() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);

  const settings = {
    dots: true, // Enable navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 posters at once
    slidesToScroll: 1, // Scroll 1 poster at a time
  };

  // Inline styling for the component
  const containerStyle = {
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    paddingTop: "3rem",
    paddingBottom: "3rem",
  };

  const sliderContainerStyle = {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  };

  const testimonialItemStyle = {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "20px",
    cursor: "pointer",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  };

  const descriptionStyle = {
    paddingLeft: "20px",
  };

  const titleStyle = {
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const smallTextStyle = {
    fontSize: "0.9em",
    color: "#555",
  };

  // Handle modal open
  const handleModalOpen = (poster) => {
    setSelectedPoster(poster);
    setModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedPoster(null);
  };

  return (
    <div style={containerStyle}>
      <div className="container">
        <div
          className="owl-carousel testimonial-carousel"
          style={sliderContainerStyle}
        >
          <Slider {...settings}>
            {posters.map((poster, key) => (
              <div
                key={key}
                className="testimonial-item"
                style={testimonialItemStyle}
                onClick={() => handleModalOpen(poster)} // Open modal when clicked
              >
                <img
                  className="img-fluid"
                  src={poster.src} // Source from posters data
                  alt={poster.alt}
                  style={imgStyle}
                />
                <div className="d-flex align-items-center">
                  <div className="ps-3" style={descriptionStyle}>
                    <h6 style={titleStyle}>{poster.title}</h6>
                    <small style={smallTextStyle}>{poster.description}</small>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Modal for displaying the selected poster in full-screen */}
      {modalOpen && selectedPoster && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
          onClick={handleModalClose} // Close modal when clicked outside
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: "10px",
              maxWidth: "95%",
              maxHeight: "95%",
              overflow: "hidden",
              padding: "10px",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <img
              src={selectedPoster.src}
              alt={selectedPoster.alt}
              style={{
                width: "100%", // Makes the image take up the full width of the modal
                height: "100%", // Maintains aspect ratio
                borderRadius: "10px",
              }}
            />
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>
              {selectedPoster.title}
            </h3>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              {selectedPoster.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
