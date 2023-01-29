import React from 'react';
import Navbar from '../Home/Navbar/Nabar';
import Footer from '../Home/Footer/Footer';
import PrPortfolio from '../Portfolio/Portfolio//PrPortfolio';
import './Portfoio.css';

function Portfolio(){
    return(
        <>
            <div className='portfolio-about-mee'>
        <Navbar />
        <PrPortfolio />
        <Footer />
            </div>
        </>
    )
}

export default Portfolio;