import React from 'react';
import { connect } from 'react-redux'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
    }

    oneDayPortfolio () {
        let { currentUser, oneDayStocks } = this.props
        
        let res = []
        
        for (let symbol in oneDayStocks) {
            let data = oneDayStocks[symbol]
            let open = data[0].open
            let num_owned = currentUser.stocks_owned[symbol]
            
            data.forEach((item, idx) => {
                let hash = {
                    date: '',
                    label: '',
                    open: currentUser.buying_power,
                    high: currentUser.buying_power,
                    close: currentUser.buying_power
                }

                if (!res[idx]) {
                    res[idx] = hash
                }

                res[idx].date = item.date
                res[idx].label = item.label
                res[idx].open += (open * num_owned)
                res[idx].high += (item.high * num_owned)
                res[idx].close += (item.close * num_owned)

            })
        }
        return res
    }


    render () {
        return (
            <div>
                
                <ul>
                    {this.oneDayPortfolio().map((data, idx) => {
                        return (
                            <div key={idx}>
                                <li>{data.date}</li>
                                <li>{data.label}</li>
                                <li>{data.open}</li>
                                <li>{data.high}</li>
                                <li>{data.close}</li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
};

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    oneDayStocks: state.entities.portfolio.stocks
    
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(Portfolio)


