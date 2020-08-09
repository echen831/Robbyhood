import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../search_bar/search_bar'

export const Header = (props) => {

    let { stocks, setState, logout } = props
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
                        <a id='footer-github'
                            target='_blank'
                            href="https://github.com/echen831">
                        </a>
                        <a id='footer-linkedin'
                            target='_blank'
                            href="https://www.linkedin.com/in/eric-chen-782b951a9/" >
                        </a>
                        <a id='footer-angelist'
                            target='_blank'
                            href="https://angel.co/u/eric-chen-80" >
                        </a>
                    </div>
                    <div>Portfolio</div>
                    <div onClick={logout} >Log Out</div>
                </div>
            </div>
        </header> 
    )
};