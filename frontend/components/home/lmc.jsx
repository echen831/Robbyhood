import React from 'react'

class LMC extends React.Component {
    constructor() {
        super()

        this.state = {
            index: 0
        }
    }

    upButton() {
        if (this.state.index === 0) {
            this.setState({index: 2})
        } else {
            this.setState({index: this.state.index - 1})
        }
    }

    downButton() {
        if (this.state.index === 2) {
            this.setState({ index: 0 })
        } else {
            this.setState({ index: this.state.index + 1 })
        }  
    }
    
    render() {
        return (
            
            <div className='lmc-body'>
                <div className='lmc-content'>
                    <div className='lmc-actions'>
                        <ul>
                            <div onClick={()=>this.upButton()}>Up</div>
                            <div
                                className={this.state.index === 0 ? 'lmc-focus' : ''}
                                onClick={()=>this.setState({index: 0})}>Learn</div>
                            <div
                                className={this.state.index === 1 ? 'lmc-focus' : ''}
                                onClick={() => this.setState({ index: 1 })}>Manage</div>
                            <div
                                className={this.state.index === 2 ? 'lmc-focus' : ''}
                                onClick={() => this.setState({ index: 2 })}>Customize</div>
                            <div onClick={()=>this.downButton()}>Down</div>
                        </ul>
                    </div>
                    <div className='lmc-details'>
                        <div id={this.state.index === 0 ? 'lmc-show' : 'lmc-hide'}
                             className='lmc-slide'>
                            <div className='lmc-image'>Image1</div>
                            <div className='lmc-msg'>
                                <h2>Learn As You Grow</h2>
                                <p>Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).</p>
                            </div>
                        </div>
                        <div id={this.state.index === 1 ? 'lmc-show' : 'lmc-hide'}
                             className='lmc-slide'>
                            <div className='lmc-image'>Image2</div>
                            <div className='lmc-msg'>
                                <h2>Manage Your Portfolio</h2>
                                <p>Keep your portfolio in your pocket. Everything you need to manage your assets is available in a single app.</p>
                                
                            </div>
                        </div>
                        <div id={this.state.index === 2 ? 'lmc-show' : 'lmc-hide'}
                             className='lmc-slide'>   
                            <div className='lmc-image'>Image3</div>
                            <div className='lmc-msg'>
                                <h2>Keep Tabs on Your Money</h2>
                                <p>Set up customized news and notifications to stay on top of your assets as casually or as relentlessly as you like. Controlling the flow of info is up to you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default LMC