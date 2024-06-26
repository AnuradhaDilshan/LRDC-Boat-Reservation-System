import React from "react";
import { socialIcons } from "../data/Data";
import { Link } from "react-router-dom";

export default function SocialIcons() {
  return (
    <>
      <div className="col-lg-3 px-5">
        <div className="d-inline-flex align-items-center py-2">
          {socialIcons.map((val, index) => (
            <a
              key={index}
              href={val.url}
              className="me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              {val.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
