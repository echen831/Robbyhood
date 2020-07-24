import { RECEIVE_ONE_STOCK, LOADING_STOCK } from '../actions/stock_actions'
import { PAGE_LOADING, PAGE_LOADED } from '../actions/session_actions'

const initialState = {
    loading: false,
    loading_page: true
}

const UIReducer = (state = initialState, action) => {
    Object.freeze(state)

    switch (action.type) {
        case LOADING_STOCK:
            return Object.assign({}, state, { loading: true });
        case RECEIVE_ONE_STOCK:
            return Object.assign({}, state, { loading: false });
        case PAGE_LOADING:
            return Object.assign({}, state, { loading_page: true });
        case PAGE_LOADED:
            return Object.assign({}, state, { loading_page: false });
        default:
            return state;
    }
}

export default UIReducer