import React from 'react';
import { connect } from 'react-redux';
import { signup,login ,clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form'


const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: 'signup'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    demoLogin: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);