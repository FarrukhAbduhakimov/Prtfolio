import React from 'react';
import {FaFacebookSquare, FaTelegramPlane, FaInstagram, FaYoutubeSquare} from 'react-icons/fa';
import Typical from 'react-typical';
import './Profila.css';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.facebook.com/farrux.abduhakimov.399/'>
                        <i className='fa' >
                            <FaFacebookSquare />
                        </i>
                    </a>
                    <a href='https://t.me/fuck_you_all_it_iis_my_game'>
                        <i className='fa'>
                            <FaTelegramPlane />
                        </i>
                    </a>
                    <a href='https://instagram.com/_farrukh_05_/'>
                        <i className='fa'>
                            <FaInstagram />
                        </i>
                    </a>
                    <a href='#'>
                        <i className='fa'>
                            <FaYoutubeSquare />
                        </i>
                    </a>
                    </div>
                </div>
                <div className='profie-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Farrukh</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Front-end Dev",
                                2000,
                                "React js",
                                2000,
                                "Html, Css",
                                2000,
                                "Java script",
                                2000,
                                "Bootstrap",
                                2000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='highlighted-btn-second'>
                        {""}
                        Hire Me {" "}
                    </button>
                    <a href='#'>
                        <button className='highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}

