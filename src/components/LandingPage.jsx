import React from "react";
import { Link } from "react-router-dom";
import video from "../images/zed-video.mp4";

export default function LandingPage() {
  return (
    <div className="landing">
      <h1> Proyect by Adib Raed </h1>
      <Link to="/home">
        <button>Start</button>
      </Link>
      <video className="video-bg" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
