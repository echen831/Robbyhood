import { connect } from 'react-redux'
import Show from './show_stock'
import { logout } from '../../actions/session_actions'
import { fetchStocks } from '../../actions/stock_actions'

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    loading: state.ui.loading
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchStocks: () => dispatch(fetchStocks())
})

export default connect(mSTP, mDTP)(Show);