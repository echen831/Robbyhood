import { connect }  from 'react-redux';
import HistStock from './hist_stock';
import { fetchHistStock } from '../../actions/stock_actions' 

const mSTP = (state, ownProps) => ({
    histData: state.entities.stocks[ownProps.match.params.symbol] || []
});

const mDTP = (dispatch) => ({
    fetchHistStock: (symbol, range) => dispatch(fetchHistStock(symbol, range))
});

export default connect(mSTP, mDTP)(HistStock)