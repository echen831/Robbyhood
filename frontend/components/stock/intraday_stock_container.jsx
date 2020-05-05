import { connect } from 'react-redux';
import IntraDayStock from './intraday_stock';
import { fetchIntraDayStock, fetchHistStock } from '../../actions/stock_actions';


const mSTP = (state, ownProps) => {
    let symbol = ownProps.symbol || ownProps.match.params.symbol
    return {
        stock: state.entities.stocks[symbol],
        symbol
         // || [] *lazy assign empty array
    }
};

const mDTP = (dispatch) => ({
    fetchIntraDayStock: (symbol) => dispatch(fetchIntraDayStock(symbol)),
    fetchHistStock: (symbol, range) => dispatch(fetchHistStock(symbol, range))
});

export default connect(mSTP, mDTP)(IntraDayStock)