import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <div className='footer-body'>
            <div id='about-me'>About Me</div>
            <div className='footer-contacts'>
                <a id='footer-github'
                   target='_blank'
                   href="https://github.com/echen831">
                   </a>
                <a id='footer-linkedin'
                   target='_blank'
                   href="https://www.linkedin.com/in/eric-chen-782b951a9/" > 
                    </a>
            </div>
        </div>
    ) 

}

export default Footer