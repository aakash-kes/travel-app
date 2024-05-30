import React, { useState } from "react";
import ChatBox from "./chatBox";
import Bot from "../../../Images/Bot.jpg";

const BotChat = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <h1>BotChat</h1>
      {toggle ? <ChatBox /> : ""}
      {/* <button onClick={() => setToggle(!toggle)}>Show || Hide</button> */}
      {/* style={{ display: "flex", justifyContent: "flex-end" }} */}
      <div style={{ display: "flex", justifyContent: "right" }}>
        {" "}
        <img
          src={Bot}
          alt="Bot"
          onClick={() => setToggle(!toggle)}
          width={100}
          height={80}
        ></img>
      </div>
    </>
  );
};

export default BotChat;
