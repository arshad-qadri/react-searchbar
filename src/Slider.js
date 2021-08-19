import React, { useEffect, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Slider = () => {
  useEffect(() => {
    // document.body.style.backgroundColor = "red";
  }, []);
  const [num, setNum] = useState(1);
  const handleInc = () => {
    if (num >= 5) {
      setNum(1);
    } else {
      setNum(num + 1);
    }
  };
  const handleDec = () => {
    if (num <= 1) {
      setNum(5);
    } else {
      setNum(num - 1);
    }
  };
  if (num === 1) {
    document.body.style.backgroundColor = "#7efff5";
  } else if (num === 2) {
    document.body.style.backgroundColor = "#f7f1e3";
  } else if (num === 3) {
    document.body.style.backgroundColor = "#d1ccc0";
  } else if (num === 4) {
    document.body.style.backgroundColor = "#ff9ff3";
  } else if (num === 5) {
    document.body.style.backgroundColor = "#ffda79";
  }
  return (
    <div>
      <h1>slider</h1>
      <div className="slider-panel">
        <div className="slider">
          <img
            style={num ? { opacity: "1" } : { opacity: "0" }}
            src={process.env.PUBLIC_URL + `/Imgs/img${num}.jpg`}
            alt=""
          />
          <div className="icon">
            <button className="left" onClick={handleDec}>
              <BsArrowLeft />
            </button>
            <button className="right" onClick={handleInc}>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
