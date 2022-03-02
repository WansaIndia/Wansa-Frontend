import { createCustomMessage } from "react-chatbot-kit";

class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createUserMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createUserMessage = createUserMessage;
    }
    handleProposal = () => {
        const message2=this.createUserMessage('Get a Proposal')
        this.addMessageToState(message2)
        const message=createCustomMessage('A','customProposal')
        this.addMessageToState(message)
    }
    handlePartner = () => {
        const message=createCustomMessage('A','customPartner')
        this.addMessageToState(message)
    }
    handleProduct = () => {
        const message=createCustomMessage('A','customProduct')
        this.addMessageToState(message)

    }

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages:[...prevState.messages,message],
        }));
    }
  }
  
  export default ActionProvider;