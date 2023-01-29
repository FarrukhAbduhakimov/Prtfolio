import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Nabar';
import './Home.css'


function Home(){
    return(
        <>
            <div className='home-container'>
                <Navbar />
                <Profile />
                <Footer />

            </div>
        </>
    )
}

export default Home;