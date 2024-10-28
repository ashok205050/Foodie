import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png';


export default function Footer() {
  return (<>      
    <div className="footer">
        <div className='Footer-top'>
        <img src={logo} alt="Logo" />

    <p className="footer-email">hello@Foodie.com</p>

        </div>
    <div className='Footer-content'>
        <div className="footer-section popular-cities">
            <h5>About Us</h5>
            <ul>
                <li><a href="#">Who We Are</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Report</a></li>
            </ul>
        </div>
        <div className="footer-details">
            <h5>Learn More</h5>
            <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">FAQ's</a></li>
            </ul>
        </div>
     </div>   
        
        <div className="footer-bottom">
            <p>© 2024 Foodie. All Rights Reserved</p>
        </div>
    </div>
    </>
  )
}
