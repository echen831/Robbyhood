import { connect } from 'react-redux';
import SearchStock from './search_stock';
import { logout } from '../../actions/session_actions';
import { fetchHistStock, fetchStocks } from '../../actions/stock_actions';


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    loading: state.ui.loading,
    symbol: ownProps.match.params.symbol,
    name: ownProps.match.params.name,
    stock: state.entities.graphs[ownProps.match.params.symbol],
    stocks: state.entities.stocks
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchHistStock: (symbol, range) => dispatch(fetchHistStock(symbol, range)),
    fetchStocks: () => dispatch(fetchStocks())
})

export default connect(mSTP, mDTP)(SearchStock);