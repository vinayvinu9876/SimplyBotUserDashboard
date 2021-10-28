import React from "react";
import Chatbot from "react-chatbot-kit";
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import 'react-chatbot-kit/build/main.css';

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)]
}

const ChatBotComp = () =>{
    return (
        <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
        />
    )
}

export default ChatBotComp;