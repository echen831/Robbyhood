import { connect } from 'react-redux';
import Stock from './stock';
import { fetchIntraDayStock } from '../../actions/stock_actions';


const mSTP = (state, ownProps) => {
    
    return {
        stock: state.entities.stocks[ownProps.match.params.symbol] // || [] *lazy assign empty array
    }
};

const mDTP = (dispatch) => ({
    fetchIntraDayStock: (symbol) => dispatch(fetchIntraDayStock(symbol))
});

export default connect(mSTP, mDTP)(Stock)