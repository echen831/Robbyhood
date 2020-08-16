import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../search_bar/search_bar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

export const Header = (props) => {

    const gitHub = <FontAwesomeIcon icon={['fab', 'github']} size='2x'/>
    const linkedIn = <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x'/>
    const angelList = <FontAwesomeIcon icon={['fab', 'angellist']} size='2x' />

    let { stocks, logout } = props
    return (
        <header className='stock-show-header'>
            <div className='top-nav'>
                <div className='left-nav'>
                    <div>
                        <Link to='/' className='header-logo'>
                            <h2>Robbyhood ➶</h2>
                        </Link>
                    </div>

                    <div className='stock-searchbar'>
                        <SearchBar stocks={stocks}
                        />
                    </div>
                </div>
                <div className='right-nav'>
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
                    <div><Link to='/stocks'> Portfolio </Link></div>
                    <div onClick={logout} >Log Out</div>
                </div>
            </div>
        </header> 
    )
};