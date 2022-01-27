import React, { useState } from 'react'
import './QuestionCard.css'
import questions from './questions';
import PutLink from './putLink';

function QuestionCard() {

    const noOfQues = questions.length
    const [checkedState, setCheckedState] = useState(
        new Array(4 * noOfQues).fill(false)
    )

    function handle(e, pos) {
        const newState = checkedState.map((item, index) => index === pos ? !item : item);
        setCheckedState(newState);
        console.log(newState)
    }

    function checkerror(){
        let v=0
        var i=0
        while(i<checkedState.length) {
            const element = checkedState[i];
            if(element===true){
                i=(Math.floor(i/4)+1)*4
                continue
            }
            if((i+1)%4===0 && v===0){
                return (Math.floor(i/4)+1)
            }
            i++
        }
        return 0
    }

    function submit(e){
        e.preventDefault()

        let error = checkerror()
        if(error){
            alert("All fields are mandatory")
        }
        else{
            window.location.reload(false);
        }
    }

    return (
        <form className='question-container' onSubmit={(e) => submit(e)}>
        {questions.map((question,index)=>(
            <div className="question-section" id={(index+1)}>
                <PutLink index={index+1} noOfQues={noOfQues} type="prev" />
                <div className="question-card">
                    <div className="question">{question.question}<span>*</span></div>
                    <div className="hint">{question.hint}</div>
                    <div className="options">
                        <div className="ans">
                            <input type="checkbox" className='chk' name={(index+1).toString()+'Q1'} id={(index+1).toString()+'Q1'} value={question.option1} checked={checkedState[index*4]} onChange={(e) => handle(e, index*4)} />
                            <label htmlFor={(index+1).toString()+'Q1'}>{question.option1}</label>
                        </div>
                        <div className="ans">
                            <input type="checkbox" className='chk' name={(index+1).toString()+'Q2'} id={(index+1).toString()+'Q2'} value={question.option2} checked={checkedState[index*4+1]} onChange={(e) => handle(e,index*4+1)} />
                            <label htmlFor={(index+1).toString()+'Q2'}>{question.option2}</label>
                        </div>
                        <div className="ans">
                            <input type="checkbox" className='chk' name={(index+1).toString()+'Q3'} id={(index+1).toString()+'Q3'} value={question.option3} checked={checkedState[index*4+2]} onChange={(e) => handle(e, index*4+2)} />
                            <label htmlFor={(index+1).toString()+'Q3'}>{question.option3}</label>
                        </div>
                        <div className="ans">
                            <input type="checkbox" className='chk' name={(index+1).toString()+'Q4'} id={(index+1).toString()+'Q4'} value={question.option1} checked={checkedState[index*4+3]} onChange={(e) => handle(e, index*4+3)} />
                            <label htmlFor={(index+1).toString()+'Q4'}>{question.option4}</label>
                        </div>
                    </div>
                </div>
                <PutLink index={index+1} noOfQues={noOfQues} type="next" />
            </div>
        ))}

            <div className="but" id="sub">
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    )
}

export default QuestionCard
