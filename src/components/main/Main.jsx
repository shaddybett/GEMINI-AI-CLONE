import React, { useContext } from "react";
import GeminiIcon from "../../assets/gemini-logo.png";
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
import { FaRegUserCircle } from "react-icons/fa";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini Clone</p>
          <img src={userpic} alt="" />
        </div>

        <div className="main-container">
          {!showResult ? ( // Hide the contents after the send button is hit
            <>
              <div className="greet">
                <p>
                  <span>Hello, Mark</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>
                    Suggest beautiful places to see on an upcomung road trip
                  </p>
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
            </>
          ) : (
            // Displays the results of the ai to the screen
            <div className="result">
              <div className="result-title">
                <img src={userpic} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={GeminiIcon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div>
                <GrGallery className="search-box-icon" />
                <FaMicrophone className="search-box-icon" />
               {input?<FiSend onClick={() => onSent()} className="search-box-icon" />: null} 
              </div>
            </div>
            <p className="bottom-info">
              Gemini clone may display inaccurate info, including about people,
              so double-check its responses. Your privacy and Gemini clone Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
