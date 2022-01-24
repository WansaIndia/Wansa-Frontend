import React from 'react';
import './Footer.css'
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return(
    <div className="Footer">
        <div className="Footer-section">
            <div className="section-1">
            <img src="/images/wansa.png" alt="something went wrong" />
            <p>To be growth catalyst for startups MSMEs and SMEs by offering solutions through offline ,digital ,technology & resolving their problems in Reach, Visibility ,Sales & Revenue.</p>
            </div>
            <div className="section-2">
                <h3 className="heading">Useful Link</h3>
                <h4 className="heading-2"><a href="#">&gt; Website and Apps</a></h4>
                <h4 className="heading-2"><a href="#">&gt; Digital Marketing and Strategy</a></h4>
                <h4 className="heading-2"><a href="#">&gt; Consulting go to Market</a></h4>
                <h4 className="heading-2"><a href="#">&gt; Creative and Design</a></h4>
                <h4 className="heading-2"><a href="#">&gt; Business Planning</a></h4>
                <h4 className="heading-2"><a href="#">&gt; Privacy Policy</a></h4>
                <h4 className="heading-2"><a href="#">&gt; Join as Solution Partner</a></h4>
            </div>
            <div className="section-3">
                <h3 className="heading">Join as Solution Partner</h3>
                <p>The  single destination for your organization to manage your business relationship and partnering opportunities with Wansa , Wansa's Clients, and other partners.</p>
                <h3 className="heading">For Enquiries</h3>
                <p>Info@wansaa.in</p>
                <p>Contactus@wansaa.in</p>
                <p><strong>Call us at : </strong> +91 7006184231</p>
            </div>
            <div className="section-4">
                <h3 className="heading">Our Offices</h3>
                {/* <div id="googleMap" className="Map"></div> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8391949236757!2d77.31136331508131!3d28.574591082440673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59d528f4991%3A0x11e4ee9124192932!2sWeWork%20Berger%20Delhi%20One!5e0!3m2!1sen!2sin!4v1642831494375!5m2!1sen!2sin"  loading="lazy"></iframe>
                <div className="social-handles">
                    <SocialIcon url="https://www.linkedin.com/wansa" bgColor='#454545' fgColor='#FFFFFF' />
                    <SocialIcon url="https://m.facebook.com/105221501383079/" bgColor='#454545' fgColor='#FFFFFF' />
                    <SocialIcon url="https://www.instagram.com/wansaworkspace/" bgColor='#454545' fgColor='#FFFFFF' />

                </div>
            </div>
        </div>
        <div className="copyright-section">
            <span> &copy; Copyright <strong>2022 Wansa Consulting and Strategy</strong> All Rights Reserved </span>
        </div>
    </div>

)}
