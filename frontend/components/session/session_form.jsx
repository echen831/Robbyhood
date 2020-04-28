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
    }

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }
    render() {
        const header = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';

        let link;
        if (header === 'Sign Up') {
            link = <Link to="/login"> Log In</Link>
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
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
};

export default SessionForm