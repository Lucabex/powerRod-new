import { Link } from "react-router-dom";
import Landing from "./Landing";
function About(){

    return(
        <>
        
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
        about
        
        </>
    )
}
export default About;
