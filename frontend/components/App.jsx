import React from "react";
import Home from './home/home';
import ShowContainer from './stock/show_stock_container'
import { Route, Switch, Link } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import HistStockContainer from './stock/hist_stock_container';
import SearchStockContainer from './stock/search_stock_container';
import Portfolio from './stock/portfolio';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


const App = () => {

    return (

        <div>
            <Switch>
                <Route exact path ='/' component={Home}/>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path='/stocks' component={ShowContainer}/>
                <ProtectedRoute exact path='/stocks/:symbol/:range' component={HistStockContainer}/>
                <ProtectedRoute exact path='/search/stocks/:symbol/:name' component={SearchStockContainer}/>
                <ProtectedRoute exact path='/portfolio' component={Portfolio} />
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