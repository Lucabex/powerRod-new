import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { sectors } from "../data/sectors";
import whatsappIcon from "../assets/icon.png";

function SectorDetail() {
    const { slug } = useParams();
    const sector = sectors.find((s) => s.slug === slug);

    if (!sector) {
        return (
            <div className="serviceNotFound">
                <h1>Sector not found</h1>
                <p><Link to="/sectors">Back to all sectors</Link></p>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{sector.title} | Power Rod</title>
                <meta name="description" content={sector.summary} />
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
                    <h1>{sector.title.toUpperCase()}</h1>
                </div>
            </div>

            <div className="servicesCard">
                <div className="serviceRow">
                    <div className="serviceMedia">{sector.tag}</div>
                    <div className="serviceBody">
                        <p>{sector.intro}</p>
                        <p className="sectorPoint"><strong>Key promise:</strong> {sector.point}</p>
                        <a className="btnCall" href="tel:02088474111">Call Now</a>
                    </div>
                </div>
            </div>

            <p style={{ textAlign: "center", padding: "20px" }}>
                <Link to="/sectors">← Back to all sectors</Link>
            </p>
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
                                    href="https://wa.me/447700900123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Chat with us on WhatsApp"
                                >
                                    <img src={whatsappIcon} alt="" className="whatsappIcon" />
                                </a>
        </>
    );
}

export default SectorDetail;