import React from "react";
import './Options.css';

const Options = (props) => {
    const options = [
      {
        text:'Get a Proposal',
        handler:props.actionProvider.handleProposal,
        id:1
      },
      {
        text:'Partner SignUp',
        handler:props.actionProvider.handlePartner,
        id:2
      },
      {
        text:'Want to list your product on Wansa',
        handler:props.actionProvider.handleProduct,
        id:3
      },

    ];
    const buttonMarkup = options.map((option) => (
      <button key={option.id} className="butt-o" onClick={option.handler}>{option.text}</button>
    ));
  
    return <div className="choose"> 
    <span>CHOOSE AN OPTION</span> 
    <div className="butt-cont">
    {buttonMarkup}
    </div></div>
  }

  export default Options