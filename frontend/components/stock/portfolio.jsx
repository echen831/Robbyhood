import React from 'react';
import { connect } from 'react-redux'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>

            </div>
        )
    }
};

const mSTP = (state) => ({
    
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(Portfolio)


