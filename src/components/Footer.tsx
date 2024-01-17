import React from 'react';
import './styles.css';
import Fb from "./../images/Fb.png";
import Twitter from "./../images/Twitter.png";

interface FooterProps {
    // Add any props you may need
}

const Footer: React.FC<FooterProps> = () => {
    return(
        <footer className="footer-container">
            <div className="footer-line"></div>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Learn more about our company and values.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@example.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    {/* Add social media icons or links */}
                    <div className="social-icons">
                        <img src={Fb} style={{width: 24, height: 24}} className="fab fa-facebook" />
                        <img src={Twitter} style={{width: 24, height: 24}} className="fab fa-twitter" />
                        {/* Add more social media icons as needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;