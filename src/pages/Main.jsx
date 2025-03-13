import React, { useEffect, useRef } from "react";
import bal from "../assets/images/giphy.gif";
import hpb from "../assets/images/giphy_happy.gif";
import hpb2 from "../assets/images/giphy (1).gif";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const audioRef = useRef(null);

  const navigate = useNavigate("")

  const handleBtn = () => {
    navigate('/note');
  }

  useEffect(() => {
    // Define playAudio inside useEffect so it's accessible
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Autoplay blocked, waiting for user interaction", err);
        });
      }
    };

    // Try playing audio when the page loads
    playAudio();

    // Listen for user interaction (click anywhere) to start audio if blocked
    const handleUserInteraction = () => {
      playAudio();
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <div className="Main">
      <audio ref={audioRef} loop autoPlay>
        <source src="/public/audio/happy birthday.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <h1>Happy Birthday <br></br>Dr. Ayesha Fatema :)</h1>
      <div className="image">
        <img src={bal} alt="" />
        <img src={hpb} alt="" />
        <img src={hpb2} alt="" />
      </div>
      <h3>Wishing you a birthday filled with love, laughter, and all the things that make you happiest!!</h3>
      <button className="p-2 text-white rounded bg-primary mb-4" onClick={handleBtn}>Next</button>
    </div>
  );
};

export default Main;
