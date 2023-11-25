import React from 'react'

import '../styles/Header.scss'
import { Truck, Vector1 } from '../assets'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <div className='header__logo'>
                    <img src={Truck} alt="truck" />
                </div>
                <div className='header__info'>
                    <div>Discover the <span>Best</span> Food and Drinks</div>
                    <div>Naturally made Healthcare Products for the better care & support of your body.</div>
                    <div>
                        <button>Explore Now!</button>
                    </div>
                </div>
            </div>
            <div className='header__right'>
                <div>
                    <img src={Vector1} alt="vector" />
                    <button>Get In Touch</button>
                </div>
            </div>
        </div>
    )
}

export default Header