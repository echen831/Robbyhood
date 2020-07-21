import React from 'react'

const MODAL_HEADER = {
    0: 'Variable APY and Debit Card Disclosures',
    1: 'Stocks and Funds Risk Disclosure',
    2: 'Options Risk Disclosure',
    3: 'Margin Disclosure',
    4: 'Crypto Risk Disclosure',
    5: 'Investment Disclosure',
    6: 'Fractional Shares Disclosure'
}

const MODAL_BODY = {
    0: 'Cash Management is an added feature to your Robinhood Financial LLC brokerage account. The Annual Percentage Yield (APY) paid by program banks might change at any time at the program banks’ discretion. Interest is earned on uninvested cash swept from the brokerage account to the program banks. Neither Robinhood Financial LLC nor any of its affiliates are banks. The debit card is issued by Sutton Bank, Member FDIC, pursuant to a license from Mastercard® International Incorporated.',
    1: 'Investing involves risk, including the loss of capital. Investors should consider their investment objectives and risks carefully before investing.',
    2: 'Options trading entails significant risk and is not appropriate for all investors. Certain complex options strategies carry additional risk. To learn more about the risks associated with options trading, please review the options disclosure document entitled Characteristics and Risks of Standardized Options, available here or through https://www.theocc.com. Investors should consider their investment objectives and risks carefully before trading options. Supporting documentation for any claims, if applicable, will be furnished upon request.',
    3: 'Margin trading involves interest charges and risks, including the potential to lose more than any amounts deposited or the need to deposit additional collateral in a falling market. Before using margin, customers must determine whether this type of trading strategy is right for them given their specific investment objectives, experience, risk tolerance, and financial situation.',
    4: 'Trading in cryptocurrencies comes with significant risks, including volatile market price swings or flash crashes, market manipulation, and cybersecurity risks. In addition, cryptocurrency markets and exchanges are not regulated with the same controls or customer protections available in equity, option, futures, or foreign exchange investing. Cryptocurrency trading can lead to large and immediate financial losses and is suitable only for investors who can bear such losses.',
    5: 'Robbyhood is a site for educational purposes only.  Athough the site mimics investments without using actual money,  profits and losses are for reference only and cannot be exchanged for actual money.',
    6: 'Fractional shares are illiquid outside of Robinhood and not transferable. For a complete explanation of conditions, restrictions and limitations associated with fractional shares, see our Customer Agreement related to fractional shares.'
}

class ProductModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(!this.props.show) return null

        return (
            <div className='prod-modal-container'
                 id='prod-modal-container'
                 onClick={(e)=>this.props.outsideClose(e)}>
                <div className='prod-modal-body'>
                    <div className='prod-modal-close-btn-container'>
                        <p onClick={()=>this.props.closeModal()}>&times;</p>
                    </div>
                    <h1 className='prod-modal-header'
                        >{MODAL_HEADER[this.props.index]}</h1>
                    <div className='prod-modal-body-container'>
                        <p>{MODAL_BODY[this.props.index]}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductModal