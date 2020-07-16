import { RECEIVE_ONE_STOCK, LOADING_STOCK } from '../actions/stock_actions'

const initialState = {
    loading: false
}

const UIReducer = (state = initialState, action) => {
    Object.freeze(state)

    switch (action.type) {
        case LOADING_STOCK:
            return Object.assign({}, state, { loading: true });
        case RECEIVE_ONE_STOCK:
            return Object.assign({}, state, { loading: false });
        default:
            return state;
    }
}

export default UIReducer