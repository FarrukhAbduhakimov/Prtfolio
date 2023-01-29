import React from "react";
import Navbar from '../Home/Navbar/Nabar';
import Footer from '../Home/Footer/Footer';
import Setupme from '../Setup/Portfolio/PortfolioSetup'
import './Setup.css'



function Setup(){
    return(
        <>
        <div className="setup-container-me">
        <Navbar />
        <Setupme />
        <Footer />
        </div>
        </>
    )
}

export default Setup;