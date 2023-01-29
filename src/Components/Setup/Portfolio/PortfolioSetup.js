import React from "react";
import './PortfolioSetup.css';

function PortfolioSetup(){
    return(
        <>
        <div className="setup-container">
            <div className="setup-parent">
                <div className="setup-dell">
                    <div className="setup-photo">
                        <img src={"https://static.toiimg.com/thumb/resizemode-4,msid-72207442,width-1200,height-900/72207442.jpg"}
                        alt=''  />
                    </div>
                    <br />
                    <div className="dell-about">
                        <i>
                        <p>Dell laptop</p>
                        <ol>
                            <li>CORE i7</li>
                            <li>Ram: 8GB</li>
                            <li>System: Kali Linux</li>
                            <li>Hard:700GB</li>
                            <li>SSD: 256GB</li>
                        </ol>
                        </i>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PortfolioSetup;