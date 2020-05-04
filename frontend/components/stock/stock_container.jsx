import { connect } from 'react-redux';
import Stock from './stock';
import { fetchIntraDayStock, fetchHistStock } from '../../actions/stock_actions';


const mSTP = (state, ownProps) => {
    
    return {
        stock: state.entities.stocks[ownProps.match.params.symbol] // || [] *lazy assign empty array
    }
};

const mDTP = (dispatch) => ({
    fetchIntraDayStock: (symbol) => dispatch(fetchIntraDayStock(symbol)),
    fetchHistStock: (symbol, range) => dispatch(fetchHistStock(symbol, range))
});

export default connect(mSTP, mDTP)(Stock)