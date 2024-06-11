import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState(""); //for receiving user input in the input field
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]); // to store the input history
  const [showResult, setShowResult] = useState(false); // will hide the default home page that has the greeting
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input)
    const response = await runChat(input); //response to be stored in this variable
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  const contenxtValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contenxtValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
