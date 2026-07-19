function Landing(){
    return(
        <>
        <div className="topBar">
            <div className="container">
                <span><strong>24/7</strong> Emergency Response — Greater London......</span>
                <a href="tel:02088474111">0208 847 4111</a>

            </div>
        </div>
        <header>
            <div class="headerBox">
                <a className="logo" href="#">
                    
                    POWER<em>R<span className="rod-o">O</span>D</em>
                    <span class="logo-tag">Plumbing &amp; Drain Care Specialists</span>

                </a>
             
                <ul id="navigatioBar">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#sectors">Sectors</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            
                <a class="btnCall" href="tel:02088474111">Call Now</a>
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
               
            </div>
            

        </div>
        <div className="wwdGridBox">
                <div className="topBox">
                    <h3>What we do</h3>
                    <h2>WE SOLVE EVERY PLUMBING &amp; DRAINAGE PROBLEM</h2>
                        <p>A full range of services, delivered by our own engineers.</p>
                </div>
                
                
            </div>
       
                    <div class="containerGrid">
                        <div className="card">
                            <h1>EMERGENCY CALL-OUTS</h1>
                            <p>Immediate response to burst pipes, overflows, blocked drains and flooded basements — any hour, any day.</p>
                        </div>
                        <div className="card">
                            <h1>HIGH PRESSURE JETTING</h1>
                            <p>Powerful water jetting and mechanical descaling to restore full flow to blocked or scaled pipework.</p>
                        </div>
                        <div className="card">
                             <h1>CCTV DRAIN SURVEYS</h1>
                            <p>Camera surveys that pinpoint faults precisely, with clear reports and recommendations before any work begins.</p>
                        </div>
                        <div className="card">
                            <h1>LEAK DETECTION</h1>
                            <p>Non-invasive tracing of hidden leaks, minimising disruption and avoiding unnecessary excavation.</p>
                        </div>
                        <div className="card">
                            <h1>PIPE LINING & REPAIRS</h1>
                            <p>No-dig pipe lining, drain repairs and maintenance that extend the life of your system.</p>
                        </div>
                        <div className="card">
                            <h1>PLANNED MAINTENANCE</h1>
                            <p>Preventative programmes that keep drains clear and free-flowing — prevention is better than cure.</p>
                        </div>
                    </div>
                    <div className="blackArea">
                         <div className="topBoxBlack">
                    <h3>WHO WE WORK WITH</h3>
                    <h2>TRUSTED ACROSS EVERY SECTOR</h2>
                        <p>Over 25 years serving domestic and commercial clients throughout Greater London and the Home Counties.</p>
                </div>
                    </div>
              
        </>
    )
}

export default Landing