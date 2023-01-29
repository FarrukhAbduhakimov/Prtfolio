import React from 'react';
import { TbBrandTelegram, TbBrandInstagram, TbBrandFacebook } from 'react-icons/tb';
import './Study.css'

function study() {
    return (
        <>
            <div className='general'>
                <center >
                    <h1 className='center'>
                        УСЛУГИ
                    </h1>
                </center>
                <div className='cards'>
                    <div className='card1'>
                        <h2>МИНИМУМ</h2>
                        <h3>2 000$</h3>
                        <ul>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                        </ul>
                        <button>
                            ПРИОБРЕСТИ
                        </button>
                    </div>
                    <div className='card1'>
                        <h2>МИНИМУМ</h2>
                        <h3>2 000$</h3>
                        <ul>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                        </ul>
                        <button>
                            ПРИОБРЕСТИ
                        </button>
                    </div>
                    <div className='card1'>
                        <h2>МИНИМУМ</h2>
                        <h3>2 000$</h3>
                        <ul>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                            <li>Услга 1</li>
                        </ul>
                        <button>
                            ПРИОБРЕСТИ
                        </button>
                    </div>
                </div>
                <div className='cards2'>
                    <div className='card2'>
                        <div className='br'>

                        </div>
                        <div className='dr'>
                            <h2>Элис</h2>
                            <h6>Преподаватель Английского </h6>
                            <p>Земная группа формировалась ближе к Солнцу, однако газопылевое облако ищет случайный возмущающий фактор. </p>
                            <div>
                                <TbBrandTelegram />
                                <TbBrandInstagram />
                                <TbBrandFacebook />
                            </div>
                        </div>
                    </div>
                    <div className='card2'>
                        <div className='br'>

                        </div>
                        <div className='dr'>
                            <h2>Элис</h2>
                            <h6>Преподаватель Английского </h6>
                            <p>Земная группа формировалась ближе к Солнцу, однако газопылевое облако ищет случайный возмущающий фактор. </p>
                            <div>
                                <TbBrandTelegram />
                                <TbBrandInstagram />
                                <TbBrandFacebook />
                            </div>
                        </div>
                    </div>
                    <div className='card2'>
                        <div className='br'>

                        </div>
                        <div className='dr'>
                            <h2>Элис</h2>
                            <h6>Преподаватель Английского </h6>
                            <p>Земная группа формировалась ближе к Солнцу, однако газопылевое облако ищет случайный возмущающий фактор. </p>
                            <div>
                                <TbBrandTelegram />
                                <TbBrandInstagram />
                                <TbBrandFacebook />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default study;