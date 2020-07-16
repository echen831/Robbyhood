import { connect } from 'react-redux'
import Show from './show_stock'
import { logout } from '../../actions/session_actions'
import { fetchStocks, fetchHistStock } from '../../actions/stock_actions'

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    stocks: state.entities.stocks,
    loading: state.ui.loading
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchStocks: () => dispatch(fetchStocks()),
    fetchHistStock: (symbol, range) => dispatch(fetchHistStock(symbol, range))
})

export default connect(mSTP, mDTP)(Show);