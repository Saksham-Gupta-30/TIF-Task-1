import React from 'react'

import { Serving } from '../assets'

import '../styles/About.scss'

const About = () => {
    return (
        <div className='about'>
            <img src={Serving} alt="serving" className='about__image' />
            <div className='about__info'>
                <div>
                    <div>
                        About Us
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                    </div>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default About