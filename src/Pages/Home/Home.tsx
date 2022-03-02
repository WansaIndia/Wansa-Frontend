import React from 'react'
import './Home.css'
import Navigation from '../../Components/Navigation/Navigation'
import Accordian from '../../Components/Accordian/Accordian'
import Section from '../../Components/Section/Section'
import SectionTwo from '../../Components/Section-2/SectionTwo'
import Card from '../../Components/Card/Card'
import Typewriter from 'typewriter-effect'
import Footer from '../../Components/Footer/Footer'
import Wansabot from '../../Components/Chatbot/chatbot'
function Home() {
    return (
        <div>
            <Navigation />
            <div className="hero">
                <div className="description">
                    <div className="heading-h">
                        We Provide <Typewriter 
                            options={{
                                strings: [' Marketing', ' Web Development', ' Influencers', ' Services'],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </div>
                    <div className="content">
                        Choose WebFX as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and technology platform.
                    </div>
                    <div className="button-d">
                        <input type="email" placeholder='Enter your E-mail'/>
                        <button type='button'>Book an Appointment Call</button>
                    </div>
                </div>
                <div className="services">
                    <div className="card">
                        Website & Apps
                    </div>
                    <div className="card">
                        Digital Marketing & Strategy
                    </div>
                    <div className="card">
                        Email Marketing
                    </div>
                    <div className="card">
                        Consulting- Go To Market
                    </div>
                    <div className="card">
                        Ecommerce
                    </div>
                    <div className="card">
                        Creative & Design
                    </div>
                </div>
            </div>
            <div className="chatbot">
                <a href="https://wa.link/lxzsw3" target="_blank" rel="noreferrer">
                <div className="whatsapp-bg">
                    <i className="fab fa-whatsapp"></i>
                </div>
                </a>
            </div>
            <Wansabot />
            <Accordian />
            <Section />
            <SectionTwo />
            <Card />
            <Footer />
        </div>
    )
}

export default Home
