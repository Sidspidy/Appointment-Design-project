import { FaPlus } from "react-icons/fa";
import "./About.css";

import { FiFacebook } from "react-icons/fi";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { PiYoutubeLogoLight } from "react-icons/pi";
function About() {
  return (
    <div className="about-container">
      <div className="header">
        <h1 className="title">A Little About me</h1>
        <button className="follow-btn">
          Follow
          <span className="plus">
            <FaPlus />
          </span>
        </button>
      </div>
      <div className="description">
        <p className="text">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the{" "}
        </p>
        <div className="break">
          <div className="hr">
            <hr />
          </div>
          <div className="read-more">
            <p>Read_More</p>
          </div>
        </div>
      </div>
      <div className="con">
        <h1 className="head">Language Spoken</h1>
        <p className="lang">English</p>
        <p className="lang">Hindi</p>
        <p className="lang">Telugu</p>
      </div>
      <div className="icons">
        <FiFacebook className="icon" />
        <CiInstagram className="icon" />
        <PiYoutubeLogoLight className="icon" />
        <CiTwitter className="icon" />
      </div>
    </div>
  );
}

export default About;
