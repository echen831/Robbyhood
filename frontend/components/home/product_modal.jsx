import React from 'react'

class ProductModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(!this.props.show) return null

        return (
            <div className='prod-modal-container'>
                <div className='prod-modal-body'>
                    <p>&times;</p>
                    <h1>Variable APY and Debit Card Disclosures</h1>
                    <p>Cash Management is an added feature to your Robinhood Financial LLC brokerage account. The Annual Percentage Yield (APY) paid by program banks might change at any time at the program banks’ discretion. Interest is earned on uninvested cash swept from the brokerage account to the program banks. Neither Robinhood Financial LLC nor any of its affiliates are banks. The debit card is issued by Sutton Bank, Member FDIC, pursuant to a license from Mastercard® International Incorporated.</p>
                </div>
            </div>
        )
    }
}

export default ProductModal