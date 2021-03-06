import { connect } from 'react-redux';
import SearchStock from './search_stock';
import { logout, fetchUser, pageLoaded, pageLoading } from '../../actions/session_actions';
import { fetchHistStock, fetchStocks, fetchNews, fetchCompanyInfo} from '../../actions/stock_actions';
import { makeTransaction, addWatchListItem, deleteWatchListItem, fetchWatchListItems } from '../../actions/transaction_actions';


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    loading: state.ui.loading,
    symbol: ownProps.match.params.symbol,
    name: ownProps.match.params.name,
    stock: state.entities.graphs[ownProps.match.params.symbol],
    stocks: state.entities.stocks,
    transactions: state.entities.transactions,
    companyInfo: state.entities.companyInfo[ownProps.match.params.symbol],
    news: state.entities.news[ownProps.match.params.symbol],
    watchListItems: state.entities.portfolio.watchListItems,
    pageLoading: state.ui.loading_page
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchHistStock: (symbol, range) => dispatch(fetchHistStock(symbol, range)),
    fetchStocks: () => dispatch(fetchStocks()),
    makeTransaction: (transaction) => dispatch(makeTransaction(transaction)),
    fetchCompanyInfo: (symbol) => dispatch(fetchCompanyInfo(symbol)),
    fetchNews: (symbol) => dispatch(fetchNews(symbol)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    addWatchListItem: (symbol) => dispatch(addWatchListItem(symbol)),
    deleteWatchListItem: (id) => dispatch(deleteWatchListItem(id)),
    fetchWatchListItems: () => dispatch(fetchWatchListItems()),
    pageLoaded: () => dispatch(pageLoaded()),
    setPageLoading: () => dispatch(pageLoading())
})

export default connect(mSTP, mDTP)(SearchStock);