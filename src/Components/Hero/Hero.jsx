import React, { useContext } from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { theme } = useContext(ShopContext);
  return (
    <div className={"hero_" + theme}>
      <div className="hero-left">
        <h2 className={"h2h_" + theme}>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p className={"ph_" + theme}>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p className={"ph_" + theme}>Collections</p>
          <p className={"ph_" + theme}>From Lakshan Enosh</p>
        </div>
        <Link className="link" to={"/collections"}>
          <div className="hero-latest-btn">
            <div className={"div_" + theme}>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </Link>
      </div>
      <div className="hero-right">
        <img src="https://lenosh-b10-bucket.s3.us-east-1.amazonaws.com/hero_image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
