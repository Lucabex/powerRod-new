import { Link } from "react-router-dom";
import whatsappIcon from "../assets/icon.png";
import { Helmet } from "react-helmet-async";
import { services } from "../data/services";

function Services(){
    return (
    <>
    <Helmet>
        <title>Plumbing & Drainage Services | Power Rod</title>
        <meta name="description" content="Emergency call-outs, high pressure jetting, CCTV drain surveys, leak detection and pipe lining — delivered by Power Rod's directly employed engineers." />
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

    <div className="topServiceBox">
        <div className="serviceContainer">
            <h1>OUR SERVICES</h1>
            <p>Reactive repairs and planned programmes, delivered by directly employed engineers with vehicles in permanent contact with our Helpdesk — so the nearest team reaches you first.</p>
            <span className="cube1"></span>
            <span className="cube2"></span>
            <span className="cube3"></span>
            <span className="cube4"></span>
            <span className="cube5"></span>
            <span className="cube6"></span>
        </div>
    </div>

    <div className="servicesCard">
        {services.map((service) => (
            
        
            <div className={`serviceRow ${service.flip ? "flip" : ""}`} key={service.slug}>
                <div className="serviceMedia">{service.mediaLabel}</div>
                <div className="serviceBody">
                    <h2>{service.title.toUpperCase()}</h2>
                    <p>{service.summary}</p>
                    <Link className="btnCall" to={`/services/${service.slug}`}>Read More</Link>
                </div>
            </div>
        ))}
    </div>
    <div className="redBanner">
        <div className="textBanner">
                            <h2>NEED AN ENGINEER?</h2>
                            <p>Free surveys · No-obligation site visits · All workmanship guaranteed</p>
                        </div>

                        <div className="showNumberBanner">
                            <div className="numberBtn">
                                <p>Call Now -<a href="tel:02088474111"> 02088474111</a></p>
                            </div>   
    </div>
</div>
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
export default Services;
