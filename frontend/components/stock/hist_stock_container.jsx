import { connect }  from 'react-redux';
import HistStock from './hist_stock';
import { fetchHistStock } from '../../actions/stock_actions' 

const mSTP = (state, ownProps) => {

    let symbol = ownProps.symbol || ownProps.match.params.symbol
    let range = ownProps.range || ownProps.match.params.range
    return {
        histData: state.entities.stocks[symbol],
        loading: state.ui.loading,
        symbol,
        range
    }
};

const mDTP = (dispatch) => ({
    fetchHistStock: (symbol, range) => dispatch(fetchHistStock(symbol, range))
});

export default connect(mSTP, mDTP)(HistStock)