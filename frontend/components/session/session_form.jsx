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
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
            .then(() => this.props.history.push('/stocks'))
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
                            <br/>
                            <label className='submit-input-label'>Email</label>
                            <br/>
                                <input className='submit-input-box'
                                    type="email" 
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    required
                                    />
                            <br/>
                            <label className='submit-input-label'>Password</label>
                            <br/>
                                <input className='submit-input-box'
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    required
                                    />
                            <br/>
                            {/* <button className={header === 'Sign In' ? 'demo-hide' : 'btn-show'}>
                                <Link to="/login"> Test with demo login</Link>
                            </button> */}
                            <ul>{this.renderErrors()}</ul>
                            <button className='btn-show' type='submit'>{header}</button>
                            <br/>
                        </form>
                        <form onSubmit={this.handleSubmit}>
                            <button 
                                type='submit'
                                onClick={this.demoLogin}
                                className = {header === 'Sign Up' ? 'demo-hide' : 'demo-show'}>
                                Demo login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default SessionForm