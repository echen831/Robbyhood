import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route } from 'react-router-dom'
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../util/route_util'

const App = () => {

    return (
        <div className='page'>
            <header className='top'>
                <h2 className='title'> Robbyhood ➶ </h2>
                <h3 className='title'><GreetingContainer /></h3>
                
            </header>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />


        </div>
    )
}

export default App;