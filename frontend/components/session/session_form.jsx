import React from 'react';
import { Link } from 'react-router-dom' 

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
    }

    demoLogin() {
        this.setState ({
            email: 'demo@hotmail.com',
            password: '123456'
        })
    };

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    };

    render() {
        const header = this.props.formType === 'signup' ? 'Sign Up' : 'Sign In';

        let link;
        if (header === 'Sign Up') {
            link = <Link to="/login"> Sign In</Link>
        } else {
            link = <Link to="/signup">Sign Up</Link>
        }

        return (
            <div>
                <h1>{header}</h1>
                <p>{link}</p>
                <form onSubmit={this.handleSubmit}>
                    <label> Email: 
                        <input type="text" 
                               value={this.state.email}
                               onChange={this.update('email')}
                                />
                    </label>

                    <label> Password:
                        <input type="password"
                               value={this.state.password}
                               onChange={this.update('password')}
                                />
                    </label>

                    <button 
                        type='submit' 
                        onClick={this.demoLogin}
                        className = {header === 'Sign Up' ? 'demo-hide' : ''}
                        >Demo Login</button>

                    <button type='submit'>{header}</button>
                </form>
            </div>
        )
    }
};

export default SessionForm