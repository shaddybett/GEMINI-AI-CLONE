// import React, { useContext, useState } from "react";
// import "./sidebar.css";
// import { Context } from "../../context/Context";
// // import "../../assets"
// import { LuMenu } from "react-icons/lu";
// import { FaPlus, FaRegMessage } from "react-icons/fa6";
// import { FaHistory, FaQuestion } from "react-icons/fa";
// import { MdQuestionMark, MdOutlineMessage } from "react-icons/md";
// import { IoMdSettings } from "react-icons/io";
// const Sidebar = () => {
//   const [extended, setExtended] = useState(false);
//   const { onSent, previousPrompt, setRecentPrompt, newChat } =
//     useContext(Context);

//   const loadPrompt = async (prompt) => {
//     setRecentPrompt(prompt);
//     await onSent(prompt);
//   };
//   return (
//     <>
//       <div className="sidebar">
//         <div className="top">
//           <LuMenu
//             onClick={() => setExtended((prev) => !prev)}
//             className="menu"
//           />{" "}
//           <div onClick ={()=> newChat()}className="new-chat">
//             <FaPlus className="sidebar-icon" />
//             {extended ? <p>New Chat</p> : null}
//           </div>
//           {extended ? (
//             <div className="recent">
//               <p className="recent-title">Recent</p>
//               {previousPrompt.map((item, index) => {
//                 return (
//                   <div
//                     onClick={() => loadPrompt(item)}
//                     className="recent-entry"
//                   >
//                     <FaRegMessage className="sidebar-icon" />
//                     <p>{item.slice(0, 18)}...</p>
//                   </div>
//                 );
//               })}
//             </div>
//           ) : null}
//         </div>

//         <div className="bottom">
//           <div className="bottom-item recent-entry">
//             <FaQuestion className="sidebar-icon" />
//             {extended ? <p>Help</p> : null}
//           </div>{" "}
//           <div className="bottom-item recent-entry">
//             <FaHistory className="sidebar-icon" />
//             {extended ? <p>Activity</p> : null}
//           </div>{" "}
//           <div className="bottom-item recent-entry">
//             <IoMdSettings className="sidebar-icon" />
//             {extended ? <p>Settings</p> : null}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
