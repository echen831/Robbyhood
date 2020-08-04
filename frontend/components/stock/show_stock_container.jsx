import { connect } from 'react-redux'
import Show from './show_stock'
import { logout, fetchUser, pageLoaded, pageLoading } from '../../actions/session_actions'
import { fetchStocks, fetchOneDayStock, fetchMultiOneYearStocks, fetchMultiOneDayStocks, fetchMultiNews } from '../../actions/stock_actions'
import { deleteWatchListItem, fetchWatchListItems } from '../../actions/transaction_actions'

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    stocks: state.entities.stocks,
    portfolio: state.entities.portfolio,
    oneYearStocks: state.entities.portfolio,
    oneDayStocks: state.entities.portfolio.stocks,
    loading: state.ui.loading,
    pageLoading: state.ui.loading_page,
    news: state.entities.news
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchStocks: () => dispatch(fetchStocks()),
    fetchOneDayStock: (symbol, range) => dispatch(fetchOneDayStock(symbol, range)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchMultiOneYearStocks: (symbols,range) => dispatch(fetchMultiOneYearStocks(symbols,range)),
    fetchMultiOneDayStocks: (symbols, range) => dispatch(fetchMultiOneDayStocks(symbols, range)),
    deleteWatchListItem: (id) => dispatch(deleteWatchListItem(id)),
    fetchWatchListItems: () => dispatch(fetchWatchListItems()),
    pageLoaded: () => dispatch(pageLoaded()),
    setPageLoad: () => dispatch(pageLoading()),
    fetchMultiNews: (symbols) => dispatch(fetchMultiNews(symbols))
})

export default connect(mSTP, mDTP)(Show);