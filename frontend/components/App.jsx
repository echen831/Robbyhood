import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route } from 'react-router-dom'
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../util/route_util'

const App = () => {

    return (

        <body>

            <header className='header'>
                <nav className='header-nav'>
                    <h2 className='header-logo'> 
                        <a href="#">Robbyhood ➶</a>
                    </h2>
                    <GreetingContainer />
                </nav>
            </header>
            <span> It's Time to do Money</span>

                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
        </body>

    )
}

export default App;