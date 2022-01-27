import React from 'react'
import './QuestionCard.css'
import { Link } from "react-scroll";

function PutLink(props){
    if(props.index>1 && props.index<=props.noOfQues && props.type==="prev")
        return(
            <Link to={props.index-1} smooth={true} duration={400}><img src="/Images/up.png" className="prev" alt="" width={50} /></Link>
        )
    else if(props.index<props.noOfQues && props.type==="next")
        return(
            <Link to={props.index+1} smooth={true} duration={400}><img src="/Images/down.png" className="next" alt="" width={40} /></Link>
        )
    else if(props.index===props.noOfQues)
        return(
            <Link to="sub" smooth={true} duration={400}><img src="/Images/down.png" className="next" alt="" width={40} /></Link>
        )
    return(
        <Link to="sub" smooth={true} duration={400}></Link>
    )
}

export default PutLink;