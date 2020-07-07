import { connect } from 'react-redux';
import SearchStock from './search_stock';
import { logout } from '../../actions/session_actions';
import { fetchHistStock, fetchHighLow } from '../../actions/stock_actions';


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    loading: state.ui.loading,
    symbol: ownProps.match.params.symbol,
    stock: state.entities.stocks[ownProps.match.params.symbol],
    price: state.entities.prices[ownProps.match.params.symbol]
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchHistStock: (symbol, range) => dispatch(fetchHistStock(symbol, range)),
    fetchHighLow: (symbol) => dispatch(fetchHighLow(symbol))
})

export default connect(mSTP, mDTP)(SearchStock);