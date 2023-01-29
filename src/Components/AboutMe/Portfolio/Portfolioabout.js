import React from 'react';
import './Portfolioabout.css';

function Portfolioabout(){
    return(
        <>
        <div className='about-container'>
            <div className='about-parent'>
                <div className='about-text'>
                    <div className='about-photo'>

                    </div>
                    <div className='about-me'>
                       <div className='haloo'>
                       <i>
                       Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.
                       </i>
                       </div>
                    <div className='helloo'>
                     <span>
                            <h2>
                            Here are a Few Highlights:
                            </h2>
                            <ul>
                                <ol>Full Stack web and mobile development</ol>
                                <ol>Interactive Front End as per the design</ol>
                                <ol>React and React Native</ol>
                                <ol>Redux for State Mnanagement</ol>
                                <ol>Building REST API</ol>
                                <ol>Managing database</ol>
                            </ul>
                        </span>
                     </div>
                     <div className='about-buttons'>
                <button type='button' className='about-btn'>
                    Hire Me
                </button>
                    <button type='button' className='about-btn-second'>
                        Get Resume
                    </button>
                     </div>
                    </div>
                     
                </div>
            </div>
        </div>
        </>
    )
}

export default Portfolioabout;