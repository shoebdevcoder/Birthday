import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import video from "../assets/video/Top 10 BIGGEST & BEST Fireworks shells 2020-2024.mp4"

const Video = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/happyBirthday"); 
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="Video">
        <video autoPlay className="w-3/4 h-auto">
          <source src="/Fireworks animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
};

export default Video;
