import React from "react";
import GreetingContainer from './greeting/greeting_container'

const App = () => {

    return (
        <div>
            <header>
                <p> Welcome to Robbyhood! </p>
                <GreetingContainer/>
            </header>
        </div>
    )
}

export default App;