import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"
const Footer = ()=>{
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR AP4</h4>
                <p>Download App from Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="appStore" />
                
            </div>

            <div className="midFooter">
                <h1>ECOMMERCE</h1>
                <p>High Quality is our first priority</p>

                <p>Copyrights 2021 &copy; SatThings</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="https://www.instagram.com/sathwika_37/">Instagram</a>
                <a href="https://www.linkedin.com/in/sathwika-chinthala-509034247/">LinkedIn</a>
                <a href="https://www.facebook.com/profile.php?id=100077525858594">Facebook</a>
                <a href="https://github.com/Sathwika538">Github</a>
            </div>
        </footer>
    )
}

export default Footer;