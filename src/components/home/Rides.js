import React from "react";
import CommonHeading from "../common/CommonHeading";
import { Leisure_Tours, Diyathma, boatItems1, boatItems2 } from "../data/Data";

export default function Rides() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Packages"
            title="Packages"
            subtitle="Explore Our"
          />
          <div className="row g-3 mb-5">
            <div className="border p-5">
              <p
                className="text-center text-uppercase"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  color: "#333",
                }}
              >
                Leisure Tours
              </p>

              <div className="row g-4">
                {boatItems1.map((item, key) => (
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                    key={key}
                  >
                    <div className="room-item shadow rounded overflow-hidden">
                      <div className="position-relative">
                        <img className="img-fluid" src={item.img} alt="img" />
                        <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                          {item.price}
                        </small>
                      </div>
                      <div className="p-4 mt-2">
                        <div className="d-flex justify-content-between mb-3">
                          <h5 className="mb-0">{item.name}</h5>
                          <div className="ps-2">{item.star}</div>
                        </div>
                        <div className="d-flex mb-3">
                          {Leisure_Tours[key % Leisure_Tours.length].map(
                            (item, index) => (
                              <small
                                key={index}
                                className="border-end me-3 pe-3"
                              >
                                {item.icon}
                                {item.quantity} {item.facility}
                              </small>
                            )
                          )}
                        </div>
                        <p className="text-body mb-3">{item.description}</p>
                        <div className="d-flex justify-content-between">
                          <a
                            className="btn btn-sm btn-primary rounded py-2 px-4"
                            href="/services"
                          >
                            {item.yellowbtn}
                          </a>
                          <a
                            className="btn btn-sm btn-dark rounded py-2 px-4"
                            href={`/booking/Leisure_Tours/${key}`}
                          >
                            {item.darkbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row g-3">
            <div className="border p-5">
              <p
                className="text-center text-uppercase"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  color: "#333",
                }}
              >
                Diyathma
              </p>

              <div className="row g-4">
                {boatItems2.map((item, key) => (
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                    key={key}
                  >
                    <div className="room-item shadow rounded overflow-hidden">
                      <div className="position-relative">
                        <img className="img-fluid" src={item.img} alt="img" />
                        <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                          {item.price}
                        </small>
                      </div>
                      <div className="p-4 mt-2">
                        <div className="d-flex justify-content-between mb-3">
                          <h5 className="mb-0">{item.name}</h5>
                          <div className="ps-2">{item.star}</div>
                        </div>
                        <div className="d-flex mb-3">
                          {Diyathma[key % Diyathma.length].map(
                            (item, index) => (
                              <small
                                key={index}
                                className="border-end me-3 pe-3"
                              >
                                {item.icon}
                                {item.quantity} {item.facility}
                              </small>
                            )
                          )}
                        </div>
                        <p className="text-body mb-3">{item.description}</p>
                        <div className="d-flex justify-content-between">
                          <a
                            className="btn btn-sm btn-primary rounded py-2 px-4"
                            href="/services"
                          >
                            {item.yellowbtn}
                          </a>
                          <a
                            className="btn btn-sm btn-dark rounded py-2 px-4"
                            href={`/booking/Diyathma/${key}`}
                          >
                            {item.darkbtn}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
