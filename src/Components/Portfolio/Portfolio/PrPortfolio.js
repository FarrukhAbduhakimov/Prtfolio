import React from "react";
import './PrPortfolio.css'

function PrPortfolio(){
    return(
        <>
        <div className="portfolio-container">
            <div className="portfolio-parent">
                <div className="portfolio">
                    <p className="portfolio-p">Portfolio All My Projects</p>
                    <div className="portfolio-first">
                        <img src="https://helpful-cupcake-2d86d2.netlify.app/img/Group%20125%20(1).png" />
                        <div className="first">
                            <h1>School 282</h1>
                            <p>
                            Google Clone with Google Search Engine. Used technologies: React and Redux.
                            </p>
                            <div className="portfolio-buttons">
                                <a href="https://helpful-cupcake-2d86d2.netlify.app/">
                                <button>
                                    {""}
                                    Hire me {""}
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-second">

                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 

export default PrPortfolio;