import { RECEIVE_COMPANY_INFO } from '../actions/stock_actions';

const companyInfoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {

        case RECEIVE_COMPANY_INFO:
            return Object.assign({}, oldState, { [action.symbol]: action.data })

        default:
            return oldState;
    }
};

export default companyInfoReducer