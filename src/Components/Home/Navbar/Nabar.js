import React from 'react';
import './Navbar.css';
import {} from 'bootstrap';



function Navbar(){
    return(
        <>
        <div className='navbar-container'>
            <div className='navbar-parent'>
                <div href='/' className='navbar-logo'>
                    <h1>Farrux</h1><sup>Dev</sup>
                </div>
                <div className='navbar-links'>
                    <a href='/'>
                        <i className='la'>
                            Home
                        </i>
                    </a>
                    <a href='/aboutme'>
                        <i className='la'>
                            About me
                        </i>
                    </a>
                    <a href='/setup'>
                        <i className='la'>
                            Setup
                        </i>
                    </a>
                    <a href='/portfolio'>
                        <i className='la'>
                            Portfolio
                        </i>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;