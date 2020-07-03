import { connect } from 'react-redux'
import Show from './show_stock'
import { logout } from '../../actions/session_actions'

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    loading: state.ui.loading
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    
})

export default connect(mSTP, mDTP)(Show);