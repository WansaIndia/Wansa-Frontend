import { createChatBotMessage, createCustomMessage} from 'react-chatbot-kit';
import Options from '../components/Options';
import Partner from '../components/Partner';
import Product from '../components/Product';
import Proposal from '../components/Proposal';
import Build from '../components/Build';
import '../chatbot.css';


const config = {
  initialMessages: [
      createChatBotMessage(`Welcome to Wansa!`),
      createCustomMessage('Message', 'custom'),
      createChatBotMessage('',{
        delay: 500,
        widget: "options",
    }),
],
  widgets: [
      {
          widgetName: 'options',
          widgetFunc: (props) => <Options {...props} />
      }
  ],
  customMessages: {
      custom: (props) => <Build {...props} />,
      customPartner: (props) => <Partner {...props} />,
      customProduct: (props) => <Product {...props} />,
      customProposal: (props) => <Proposal {...props} />,
  },
  customComponents: {
      header: () => <div className="react-chatbot-kit-chat-header"> 
      <img src="images/wansa.png" alt="" />
      <span>Wansa</span>
    </div>,
  }
};

export default config;