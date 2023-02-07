import React from "react";

const Home = () => {
  return <div>Home</div>;
};

export default Home;

// a homepage for chat app
// import React, { useState } from "react";
// import { ChatInput } from "./ChatInput";
// import { ChatMessage } from "./ChatMessage";

// export const HomePage = () => {
//   const [messages, setMessages] = useState([]);

//   const sendMessage = (message) => {
//     setMessages([...messages, message]);
//   };

//   return (
//     <div>
//       <h1>Welcome to the Chat App!</h1>

//       <div className="chat-window">
//         <div className="chat-header">Chat Room</div>

//         <ul className="chat-messages">
//           {messages.map((message, index) => (
//             <ChatMessage key={index} message={message} />
//           ))}
//         </ul>

//         <ChatInput onSendMessage={sendMessage} />
//       </div>
//     </div>
//   );
// };

