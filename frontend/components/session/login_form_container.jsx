import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form'


const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'login'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    demoLogin: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);