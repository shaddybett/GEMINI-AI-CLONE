import React, { useContext } from "react";
import "./Main.css";
import userpic from "../../assets/userpic1.jpg";
import { FaRegCompass } from "react-icons/fa6";
import { GoLightBulb } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { FaMicrophone } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Context } from "../../context/Context";

const Main = () => {

  const {onSent, recentPrompt, showResult,loading, resultData, setInput, input} = useContext(Context)
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini Clone</p>
          <img src={userpic} alt="" />
        </div>

        <div className="main-container">
          <div className="greet">
            <p>
              <span>Hello, Mark</span>
            </p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to see on an upcomung road trip</p>
              <FaRegCompass className="card-icon" />{" "}
            </div>

            <div className="card">
              <p>Briefly summarize this concept: urban planning</p>
              <GoLightBulb className="card-icon" />{" "}
            </div>

            <div className="card">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <FaRegMessage className="card-icon" />{" "}
            </div>

            <div className="card">
              <p>Improve the readability of the following code</p>
              <FaCode className="card-icon" />{" "}
            </div>
          </div>

          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
              <div>
                <GrGallery className="search-box-icon"/>
                <FaMicrophone className="search-box-icon"/>
                <FiSend onClick={() => onSent()} className="search-box-icon"/>
              </div>
            </div>
            <p className="bottom-info">Gemini clone may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini clone Apps</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
