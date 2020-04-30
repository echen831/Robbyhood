import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
        // this.renderErrors = this.renderErrors.bind(this)
    }

    componentWillUnmount() {
        this.props.clearErrors()
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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
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
            <div className='body'>
                {/* <header className='header'>
                    <nav className='header-nav'>
                        <Link to='/' className='header-logo'>
                            <h2>Robbyhood ➶</h2>
                        </Link>
                        <GreetingContainer />
                    </nav>
                </header> */}
                <div className='form-body'>
                    <div className='submit-image-body'> 
                        <h1></h1>
                    </div>
                    <div className='submit-form-body'>
                        <form onSubmit={this.handleSubmit} className='form'>
                            <h1 className='form-header'>Welcome to Robbyhood</h1>
                            <br/>
                            {/* <h2>Please {header} or {link}</h2>  */}
                            <h1>{this.renderErrors()}</h1>
                            <br/>
                            <label className='submit-input-label'>Email</label>
                            <br/>
                                <input className='submit-input-box'
                                    type="text" 
                                    value={this.state.email}
                                    placeholder='Email'
                                    onChange={this.update('email')}
                                />
                            <br/>
                            <label className='submit-input-label'>Password</label>
                            <br/>
                                <input className='submit-input-box'
                                    type="password"
                                    value={this.state.password}
                                    placeholder='Password'
                                    onChange={this.update('password')}
                                />
                            <br/>
                            {/* <button className={header === 'Sign In' ? 'demo-hide' : 'btn-show'}>
                                <Link to="/login"> Test with demo login</Link>
                            </button> */}
                            <button 
                                type='submit'
                                onClick={this.demoLogin}
                                className = {header === 'Sign Up' ? 'demo-hide' : 'btn-show'}>
                                Demo Login
                            </button>
                            <br/>
                            <button className='btn-show' type='submit'>{header}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default SessionForm