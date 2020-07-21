import React from 'react';
import { connect } from 'react-redux'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
    }

    oneDayPortfolio () {
        let { currentUser, oneDayStocks } = this.props
        let data = []



    }


    render () {
        return (
            <div>

            </div>
        )
    }
};

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    oneDayStocks: state.portfolio.stocks
    
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(Portfolio)


