import React from 'react';

class CompanyInfo extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     infoShow: false
        // }
    }

    render () {
        // let { infoShow } = this.state
        let { companyInfo, infoShow } = this.props

        if (!companyInfo) return null
        return(
            <div >
                {/* <div className='company-info-header'>
                    <p>About</p>
                    <p onClick={() => this.setState({ infoShow: !infoShow })}>{!infoShow ? 'show' : 'hide'}</p>
                </div> */}
                <div className={infoShow ? 'company-des-container' : 'display-none'}>
                    <p>{companyInfo.description}</p>
                </div>
                <div className={infoShow ? 'company-tidbit-container' : 'display-none'}>
                    <div className='company-tidbit-row'>
                        <div className='company-tidbit-col'>
                            <p>CEO</p>
                            <p>{companyInfo.CEO}</p>
                        </div>
                        <div className='company-tidbit-col'>
                            <p>Employees</p>
                            <p>{companyInfo.employees}</p>
                        </div>
                        <div className='company-tidbit-col'>
                            <p>Location</p>
                            <p>{`${companyInfo.city}, ${companyInfo.state}`}</p>
                        </div>
                        <div className='company-tidbit-col'>
                            <p>Exchange</p>
                            <p>{companyInfo.exchange}</p>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }

}

export default CompanyInfo