import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }
    render() {

        const header = this.props.formType === 'signup' ? 'Sign up' : 'Log In'

        return (
            <div>
                <h1>{header}</h1>
                <form>
                    <label>
                        <input type="text" value={this.state.email}/>
                    </label>
                </form>
            </div>
        )
    }
};

export default SessionForm