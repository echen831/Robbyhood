import { connect } from 'react-redux'
import Show from './show_stock'
import { logout } from '../../actions/session_actions'
import { fetchStocks, fetchOneDayStock } from '../../actions/stock_actions'

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    stocks: state.entities.stocks,
    myStocks: state.entities.portfolio.stocks,
    loading: state.ui.loading
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchStocks: () => dispatch(fetchStocks()),
    fetchOneDayStock: (symbol, range) => dispatch(fetchOneDayStock(symbol, range))
})

export default connect(mSTP, mDTP)(Show);