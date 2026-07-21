import { Link } from "react-router-dom";
import whatsappIcon from "../assets/icon.png";
import { Helmet } from "react-helmet-async";
function Contact(){
    return(
    <>
    <Helmet>
    <title>Contact Us | Power Rod Plumbing & Drain Care</title>
    <meta name="description" content="Get in touch with Power Rod for a free survey or emergency call-out. Call 0208 847 4111, available 24/7 across Greater London and the Home Counties." />
</Helmet>
    <div className="topBar">
            <div className="container">
                <span><strong>24/7</strong> Emergency Response — Greater London......</span>
                <a href="tel:02088474111">0208 847 4111</a>

            </div>
        </div>
        <header>
            <div className="headerBox">
                <a className="logo" href="#">
                    
                    POWER<em>R<span className="rod-o">O</span>D</em>
                    <span className="logo-tag">Plumbing &amp; Drain Care Specialists</span>

                </a>
             
                <ul id="navigatioBar">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/sectors">Sectors</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </ul>
            
                <a className="btnCall" href="tel:02088474111">Call Now</a>
            </div>
        </header>
        Contact
        <div className="footer">
                        <div className="footerGrid">
                            <div className="ft1">
                                <p id="footLogo">POWER<strong>ROD</strong></p>
                                <p>London's leading plumbing and drain care specialists. Reactive, round-the-clock service for over 25 years.</p>
                            </div>
                            <div className="ft2">
                                 <h4>The area we serve</h4>
                            </div>
                            <div className="ft2">
                                <h4>Contact</h4>
                            </div>
                            <div className="ft3">
                                <p>Company</p>
                                <p><Link to="./services" id="linkFooter">SERVICES</Link></p>
                                <p><Link to="./about" id="linkFooter">ABOUT</Link></p>
                                <p><Link to="./services" id="linkFooter">CONTACTS</Link></p>
                                <p><Link to="./sectors" id="linkFooter">SECTORS</Link></p>

                            </div>
                        </div>
                    </div>
                    <a className="whatsappBtn"
                        href="https://wa.me/447700900123?text=Hi%20Power%20Rod%2C%20I%20have%20a%20drainage%20problem"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={whatsappIcon} alt="WhatsApp" className="whatsappIcon" />
                    </a>
    </>
    )
}
export default Contact;