import React from "react";
import Portfolioabout from "./Portfolio/Portfolioabout";
import Navbar from '../Home/Navbar/Nabar';
import Footer from '../Home/Footer/Footer';
import './Aboutme.css'


function Aboutme(){
    return(
        <>
        <div className="about-me-container">
        <Navbar />
        <Portfolioabout />
        <Footer />
        </div>
        </>
    )
}

export default Aboutme;