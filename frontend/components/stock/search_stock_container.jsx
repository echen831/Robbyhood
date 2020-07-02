import { connect } from 'react-redux'
import SearchStock from './search_stock'
import { logout } from '../../actions/session_actions'

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    symbol: ownProps.symbol || ownProps.match.params.symbol,
    stock: state.entities.stocks[ownProps.match.params.symbol]
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(SearchStock);