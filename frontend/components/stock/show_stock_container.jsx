import { connect } from 'react-redux'
import Show from './show_stock'
import { logout, fetchUser, pageLoaded, pageLoading } from '../../actions/session_actions'
import { fetchStocks, fetchOneDayStock, fetchOneYearStock } from '../../actions/stock_actions'
import { deleteWatchListItem, fetchWatchListItems } from '../../actions/transaction_actions'

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    stocks: state.entities.stocks,
    myStocks: state.entities.portfolio.stocks,
    loading: state.ui.loading,
    pageLoading: state.ui.loading_page
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchStocks: () => dispatch(fetchStocks()),
    fetchOneDayStock: (symbol, range) => dispatch(fetchOneDayStock(symbol, range)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    deleteWatchListItem: (id) => dispatch(deleteWatchListItem(id)),
    fetchWatchListItems: () => dispatch(fetchWatchListItems()),
    fetchOneYearStock: (symbol, range) => dispatch(fetchOneYearStock(symbol, range)),
    pageLoaded: () => dispatch(pageLoaded()),
    setPageLoad: () => dispatch(pageLoading())
})

export default connect(mSTP, mDTP)(Show);