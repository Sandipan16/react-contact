import React from "react";
import "./styles.css";

export default function Card() {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">Beyonce</h2>
        <img
          className="circle-img"
          src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
          alt=""
        />
      </div>
      <div className="bottom">
        <p className="info">+123 2367</p>
        <p className="info">beyonce@gmail.com</p>
      </div>
    </div>
  );
}
