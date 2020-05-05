import React from "react";
import GreetingContainer from './greeting/greeting_container'
import Home from './home/home'
import Show from './stock/show_stock'
import { Route, Switch, Link } from 'react-router-dom'
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util'
import IntraDayStockContainer from './stock/intraday_stock_container'
import HistStockContainer from './stock/hist_stock_container'

const App = () => {

    return (

        <div>
            <Switch>
                <Route exact path ='/' component={Home}/>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path='/stocks' component={Show}/>
                <ProtectedRoute path='/stocks/:symbol/:range' component={HistStockContainer}/>
                <ProtectedRoute path='/stocks/:symbol' component={IntraDayStockContainer}/>
                <Route path='*' component={NoMatch}/>
            </Switch>
        </div>

    )
}



const NoMatch = () => {
    return (
        <div>
            404 Page not found
            <Link to='/'>
                <h2>Return to homepage</h2>
            </Link>
        </div>
    )
}

export default App;