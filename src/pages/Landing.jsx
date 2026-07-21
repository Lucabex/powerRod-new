import { Link } from "react-router-dom"
import whatsappIcon from "../assets/icon.png";
import { Clock, HardHat, PoundSterling, ShieldCheck } from "lucide-react";
import bath1 from "../assets/bath1.webp";
import bath2 from "../assets/bath2.webp";
import bath3 from "../assets/bath3.jpeg";
import bath4 from "../assets/bath4.jpeg";
import plumb1 from "../assets/plumb1.avif";
import plumb2 from "../assets/plumb2.avif";
import plumb3 from "../assets/plumb3.jpg";
import plumb4 from "../assets/plumb4.jpg";
import { Helmet } from "react-helmet-async";

const galleryImages = [
    { src: bath1, alt: "Modern bathroom installation" },
    { src: bath2, alt: "Fitted bathroom with walk-in shower" },
    { src: bath3, alt: "Compact bathroom renovation" },
    { src: bath4, alt: "Bathroom vanity installation" },
    { src: plumb1, alt: "Boiler and pipework installation" },
    { src: plumb2, alt: "Hot water cylinder installation" },
    { src: plumb3, alt: "Copper pipework detail" },
    { src: plumb4, alt: "Heating system installation" },
];
const sideImg=[
     { src: plumb1, alt: "Boiler and pipework installation" },
]
function Landing(){
    return(
        <>
        <Helmet>
            <title>Power Rod | 24/7 Plumbing & Drain Care Specialists in London</title>
            <meta name="description" content="Power Rod provides 24/7 emergency plumbing and drain care across Greater London and the Home Counties — CCTV surveys, high pressure jetting, leak detection and pipe lining." />
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
        <div className="hero">
            <div className="boxes">
                <span id="box1"></span>
                <span id="box2"></span>
                <span id="box3"></span>
                <span id="box4"></span>
                <span id="box5"></span>
                <span id="box6"></span>
                <span id="box7"></span>
                <span id="box8"></span>
                <span id="box9"></span>
                <span id="box10"></span>
                <span id="box11"></span>
            </div>
            <div className="introContent">

                <p>Active - Since 1998</p>

                <h1 className="head1">Londons Leading <strong> Plumbing and drain care </strong> Specialist </h1>
              
                <h4>From a leaking pipe to a flooded basement, our engineers respond immediately — backed by a professional Helpdesk.</h4>
                <div className="headerBtnBox">
                     <button className="emergBtn">Get emergency help</button>
                     <button className="servBtn">Our services</button>
                </div>
                <p className="callBanner" id="pCall">Call Now <a href="tel:02088474111"> 02088474111</a></p>
                
                <p>
                    <a className="whatsappBtnTop"
                        href="https://wa.me/447700900123"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp"
                    >
                        WhatsApp Now
                    </a>
                </p>
               
            </div>
            

        </div>
        <div className="wwdGridBox">
                <div className="topBox">
                    <h3>What we do</h3>
                    <h2>WE SOLVE EVERY PLUMBING &amp; DRAINAGE PROBLEM</h2>
                        <p>A full range of services, delivered by our own engineers.</p>
                </div>
                
                
            </div>
                    <div className="bigGrid">
                        <div className="containerGrid">
                            <div className="card">
                                <h3>EMERGENCY CALL-OUTS</h3>
                                <p>Immediate response to burst pipes, overflows, blocked drains and flooded basements — any hour, any day.</p>
                            </div>
                            <div className="card">
                                <h3>HIGH PRESSURE JETTING</h3>
                                <p>Powerful water jetting and mechanical descaling to restore full flow to blocked or scaled pipework.</p>
                            </div>
                            <div className="card">
                                <h3>CCTV DRAIN SURVEYS</h3>
                                <p>Camera surveys that pinpoint faults precisely, with clear reports and recommendations before any work begins.</p>
                            </div>
                            <div className="card">
                                <h3>LEAK DETECTION</h3>
                                <p>Non-invasive tracing of hidden leaks, minimising disruption and avoiding unnecessary excavation.</p>
                            </div>
                            <div className="card">
                                <h3>PIPE LINING & REPAIRS</h3>
                                <p>No-dig pipe lining, drain repairs and maintenance that extend the life of your system.</p>
                            </div>
                            <div className="card">
                                <h3>PLANNED MAINTENANCE</h3>
                                <p>Preventative programmes that keep drains clear and free-flowing — prevention is better than cure.</p>
                            </div>
                        </div>

                        <div className="imgGrid">
                            <img className="sideImg" src={plumb1} alt="Boiler and pipework installation" />
                        </div>

                    </div>
                    
                    <div className="blackArea">

                         <div className="topBoxBlack">
                            <h3>WHO WE WORK WITH</h3>
                            <h2>TRUSTED ACROSS EVERY SECTOR</h2>
                                <p>Over 25 years serving domestic and commercial clients throughout Greater London and the Home Counties.</p>
                        </div>

                        <div className="wwwGrid">
                            <div className="card2">DOMESTIC</div>
                            <div className="card2">RETAIL</div>
                            <div className="card2">HEALTHCARE</div>
                            <div className="card2">LEISURE</div>
                            <div className="card2">PROPERTY</div>
                            <div className="card2">LOCAL AUTHORITY</div>
                            
                        </div>


                    </div>
                        <div className="certificateBox">
                            <div className="certTopBox">
                                <h3>ACCREDITATIONS</h3>
                                <h2>INDEPENDENTLY AUDITED. FULLY CERTIFIED.</h2>
                            </div>
                            <div className="certGrid">
                            <div className="certCard">
                                <h3>ISO 9001</h3>
                                <p>Certified Quality Management Systems</p>
                            </div>
                            <div className="certCard">
                                <h3>SAFECONTRACTOR</h3>
                                <p>Health &amp; safety competency assessed nationwide</p>
                            </div>
                            <div className="certCard">
                                <h3>CHAS</h3>
                                <p>Contractors Health and Safety Assessment scheme</p>
                            </div>
                            <div className="certCard">
                                <h3>CONSTRUCTIONLINE</h3>
                                <p>Audited register of compliant contractors</p>
                            </div>
                            <div className="certCard">
                                <h3>IPHE</h3>
                                <p>Professional body for plumbing specialists</p>
                            </div>
                            <div className="certCard">
                                <h3>EXOR</h3>
                                <p>Leading accreditation for the Public Sector</p>
                            </div>
                        </div>
                    </div>

                   <div className="whyUs">
    <div className="whyUsTopBox">
        <h3>WHY CHOOSE US</h3>
        <h2>THE <span>POWER<strong>ROD</strong></span> DIFFERENCE</h2>
    </div>
    <div className="whyUsGrid">
        <div className="whyCard">
            <Clock className="whyIcon" />
            <h4>FAST RESPONSE</h4>
            <p>We respond immediately to every emergency — 24 hours a day, 365 days a year.</p>
        </div>
        <div className="whyCard">
            <HardHat className="whyIcon" />
            <h4>EXPERIENCED ENGINEERS</h4>
            <p>Directly employed, highly trained engineers — never anonymous subcontractors.</p>
        </div>
        <div className="whyCard">
            <PoundSterling className="whyIcon" />
            <h4>TRANSPARENT PRICING</h4>
            <p>Agreed price schedules and job value limits, so there are no surprises when the invoice arrives.</p>
        </div>
        <div className="whyCard">
            <ShieldCheck className="whyIcon" />
            <h4>GUARANTEED WORKMANSHIP</h4>
            <p>All work is guaranteed and completed to the highest standard — our success is built on repeat business.</p>
        </div>
    </div>
</div>
                    <div className="pictureBox">
    <div className="pictureTopBox">
        <h3>OUR WORK</h3>
        <h2>RECENT PROJECTS</h2>
    </div>
    <div className="pictureGrid">
        {galleryImages.map((img, index) => (
            <div className="pictureTile" key={index}>
                <img src={img.src} alt={img.alt} />
            </div>
        ))}
    </div>
</div>
                    <div className="redBanner">
                        <div className="textBanner">
                            <h2>DRAIN PROBLEM? WE ARE ON OUR WAY.</h2>
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
                        href="https://wa.me/447700900123"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp"
                    >
                        <img src={whatsappIcon} alt="" className="whatsappIcon" />
                    </a>
                                
        </>
    )
}

export default Landing