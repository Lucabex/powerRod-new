import { Link } from "react-router-dom";
import whatsappIcon from "../assets/icon.png";
import { Helmet } from "react-helmet-async";
import { sectors } from "../data/sectors";
import plumb3 from "../assets/plumb3.jpg";
import plumb4 from "../assets/plumb4.jpg";

function Sectors(){
    return(
        <>
        <Helmet>
            <title>Sectors We Serve | Power Rod</title>
            <meta name="description" content="Power Rod supports retail, healthcare, leisure, property, local authority and insurance sectors across Greater London with 24/7 plumbing and drain care." />
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
                <h1>SECTORS WE SERVE</h1>
                <p>Greater London and the Home Counties hold a quarter of the UK's population — and some of its oldest, most demanding properties. Whatever your sector, we understand its pressures.</p>
                <span className="cube1"></span>
                        <span className="cube2"></span>
                        <span className="cube3"></span>
                        <span className="cube4"></span>
                        <span className="cube5"></span>
                        <span className="cube6"></span>
            </div>
        </div>
        <div className="bigSectorGrid">
                <div className="sectorGrid">
                {sectors.map((sector) => (
                    <div className="sectorCard" key={sector.slug}>
                        <span className="sectorTag">{sector.tag}</span>
                        <h2>{sector.title.toUpperCase()}</h2>
                        <p>{sector.summary}</p>
                        <p className="sectorPoint"><strong>Key promise:</strong> {sector.point}</p>
                        <Link className="btnCall" to={`/sectors/${sector.slug}`}>Read More</Link>
                    </div>
                ))}
            </div>
            <div className="sideGridImg">
                <img className="sectorImg" src={plumb3} alt="Copper pipework detail" />
                <img className="sectorImg" src={plumb4} alt="Heating system installation" />
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
export default Sectors;
