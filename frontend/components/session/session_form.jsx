import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            buying_power: 1000,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleDemoLogin = this.handleDemoLogin.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    demoLogin() {
        // this.setState ({
        //     email: 'demo@hotmail.com',
        //     password: '123456'
        // })
        const email = 'demo@hotmail.com';
        const password = '123456';
        const Speed = 100;

        document.getElementById("demo-button").disabled = true;
        this.setState({ email: "", password: "" });

        for (let i = 0; i < email.length; i++) {
            setTimeout(() => {
                this.setState({ email: this.state.email + email[i] });
            }, i * Speed);
        }
        for (let j = 0; j < password.length; j++) {
            setTimeout(() => {
                this.setState({ password: this.state.password + password[j] });
            }, (email.length * Speed) + j * Speed);
        }
        setTimeout(() => {
            const user = Object.assign({}, this.state)
            this.props.demoLogin(user).then(() => this.props.history.push("/stocks"));
        }, (email.length * Speed) + (password.length * Speed) + Speed);

    };

    // handleDemoLogin(e) {
    //     e.preventDefault();
    //     const user = Object.assign({}, this.state)
    //     this.props.demoLogin(user)
    //         .then(() => this.props.history.push('/stocks'))

    // }

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
        const { formType } = this.props;
        const { email, username, password, buying_power} = this.state;
        const header = formType === 'signup' ? 'Sign Up' : 'Sign In';

        let link;
        if (header === 'Sign Up') {
            link = <Link to="/login"> Sign In</Link>
        } else {
            link = <Link to="/signup">Sign Up</Link>
        }

        return (
            <div className='session-body'>
                <div className='form-body'>
                    <div className='submit-image-body'> 
                       {/* <img src="/assets/front.gif" alt=""/> */}
                    </div>
                    <div className='submit-form-body'>
                        <form onSubmit={this.handleSubmit} className='form'>
                            <h1 className='form-header'>Welcome to Robbyhood</h1>

                            <label className='submit-input-label'>Email</label>
                            <br/>
                                <input className='submit-input-box'
                                    id='email'
                                    type="text" 
                                    value={email}
                                    onChange={this.update('email')}
                                    required
                                    />
                            <br/>
                            <label className={formType === 'signup' ? 'submit-input-label' : 'hide'}>Username</label>
                            <br/>
                                <input className={formType === 'signup' ? 'submit-input-box' : 'hide'}
                                    id='username'
                                    type="text"
                                    value={username}
                                    onChange={this.update('username')}
                                    />
                            <br/>
                            <label className='submit-input-label'>Password</label>
                            <br />
                            <input className='submit-input-box'
                                id='password'
                                type="password"
                                value={password}
                                onChange={this.update('password')}
                                required
                            />
                            <br />
                            <div className={formType === 'signup' ? 'submit-input-bp' : 'hide'}> Buying Power
                                <label> $1000
                                    <input value= {1000}
                                           type="radio" 
                                           name="buying_power"
                                           checked={buying_power === 1000 || buying_power === '1000' ? true : false}
                                           onChange={this.update('buying_power')} 
                                           />
                                </label>
                                <label> $3000
                                    <input value={3000}
                                        type="radio"
                                        name="buying_power"
                                        onChange={this.update('buying_power')}
                                        />
                                </label>
                                <label> $5000
                                    <input value={5000}
                                        type="radio"
                                        name="buying_power"
                                        onChange={this.update('buying_power')}
                                        />
                                </label>
                            </div>
                            <ul>{this.renderErrors()}</ul>
                            <button className='btn-show' type='submit'>{header}</button>
                            <br/>
                        </form>
                        <form className='demo-container'>
                            <button
                                type='submit'
                                onClick={this.demoLogin}
                                className = 'demo-show'
                                id='demo-button'
                                >
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