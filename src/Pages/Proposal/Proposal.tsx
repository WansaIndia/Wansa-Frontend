import React from 'react'
import Navigation from '../../Components/Navigation/Navigation';
import QuestionCard from '../../Components/QuestionCard/QuestionCard';
import './Proposal.css';
import Footer from '../../Components/Footer/Footer';

function Proposal() {
    return (
        <div>
            <Navigation />
            <div className="hero body">
                <div className="container">
                    <div className="heading-d">Would you prefer to talk to someone <strong>in person</strong>?</div>
                    <div className="desc">Speak with a strategist:</div>
                    <button className="call"><i className="fas fa-mobile"></i> 888-601-5359</button>
                </div>
            </div>
            <QuestionCard />
            <Footer />
        </div>
    )
}

export default Proposal
