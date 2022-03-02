import 'react-chatbot-kit/build/main.css'
import './chatbot.css';
import Chatbot from 'react-chatbot-kit';
import config from './bot/config';
import MessageParser from './bot/MessageParser.js';
import ActionProvider from './bot/ActionProvider.js';
import React,{useState} from 'react';

function Wansabot() {
  const [showBot, toggleBot] = useState(false);

  return (
    <div className='Wansabot'>
    {showBot && (
      <div className="close-butt">
        <button className="main-button" onClick={() => toggleBot((showBot) => !showBot)}>X</button>
      </div>
    )}
    {showBot && (
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />)}
      {!showBot && (
      <div className="main-butt">
      <button className='main-button' onClick={() => toggleBot((showBot) => !showBot)}> <img src="images/chatbotopener.png" alt="" className='avatar' /> </button>
      </div>
      )}
    </div>
  );
}

export default Wansabot;
