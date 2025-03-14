import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import no from "../assets/images/no-bubu.gif";
import happy from "../assets/images/istockphoto-496261720-612x612-removebg-preview.png";

const Surprise = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(happy);

  const handleYesClick = () => {
    navigate("/rockets");
  };
  const handleNoClick = () => {
    setMessage("There is no for NO, Press Yes to continue :)");
    // alert("There is no No")\
    setImage(no);
  };

  return (
    <div>
      <div className="surprise">
        <img src={image} alt="Displayed" />

        {/* {message && <img src={no} />} */}
        <h1 className="rounded p-2 mt-2">Ready ?</h1>
        <div className="btn">
          <button id="btn-yes" onClick={handleYesClick}>
            Yes
          </button>
          <button id="btn-no" onClick={handleNoClick}>
            No
          </button>
        </div>
        {message && (
          <h2 className="mt-4 text-lg text-danger rounded p-2 text-center">
            {message}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Surprise;
