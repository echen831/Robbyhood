import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    const gitHub = <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
    const linkedIn = <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' />
    const angelList = <FontAwesomeIcon icon={['fab', 'angellist']} size='2x' />

    return (
        <div className='footer-body'>
            <div id='about-me'>About Me: </div>
            <div className='footer-contacts'>
                <a id='footer-icon'
                    target='_blank'
                    href="https://github.com/echen831">{gitHub}
                </a>
                <a id='footer-icon'
                    target='_blank'
                    href="https://www.linkedin.com/in/eric-chen-782b951a9/" >{linkedIn}
                </a>
                <a id='footer-icon'
                    target='_blank'
                    href="https://angel.co/u/eric-chen-80" >{angelList}
                </a>
            </div>
        </div>
    ) 

}

export default Footer