import React from 'react'
import "./index.css";
import { assets } from "../../assets/assets";
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt='' />
                    <p>
                        Craving something delicious? We've got you covered! Explore a wide variety of mouth-watering dishes from your favorite local restaurants, all in one place. Bon appétit!
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>+250792402699</li>
                        <li>appetaFoods@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright @ 2024 appetaFoods.com</p>

        </div>
    )
}

export default Footer
