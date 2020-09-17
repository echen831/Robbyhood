import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
class LMC extends React.Component {
    constructor() {
        super()

        this.state = {
            index: 0
        }
        this.autoShift = this.autoShift.bind(this)
    }

    componentDidMount() {
        this.handle = setInterval(this.autoShift, 8000)
    }

    componentWillUnmount() {
        clearInterval(this.handle)
    }

    autoShift() {
        if (this.state.index === 2) {
            this.setState({ index: 0 })
        } else {
            this.setState({ index: this.state.index + 1 })
        }  
    }

    upButton() {
        if (this.state.index === 0) {
            this.setState({index: 2})
        } else {
            this.setState({index: this.state.index - 1})
        }
        clearInterval(this.handle)
    }

    downButton() {
        if (this.state.index === 2) {
            this.setState({ index: 0 })
        } else {
            this.setState({ index: this.state.index + 1 })
        } 
        clearInterval(this.handle) 
    }
    
    render() {
        return (
            
            <div className='lmc-body'>
                <div className='lmc-content'>
                    <div className='lmc-actions'>
                        <ul>
                            <div onClick={() => this.upButton()}><FontAwesomeIcon icon={faChevronUp} /></div>
                            <div
                                className={this.state.index === 0 ? 'lmc-focus' : ''}
                                onClick={()=>this.setState({index: 0})}>Learn</div>
                            <div
                                className={this.state.index === 1 ? 'lmc-focus' : ''}
                                onClick={() => this.setState({ index: 1 })}>Manage</div>
                            <div
                                className={this.state.index === 2 ? 'lmc-focus' : ''}
                                onClick={() => this.setState({ index: 2 })}>Customize</div>
                            <div onClick={() => this.downButton()}><FontAwesomeIcon icon={faChevronDown} /></div>
                        </ul>
                    </div>
                    <div className='lmc-details'>
                        <div id={this.state.index === 0 ? 'lmc-show' : 'lmc-hide'}
                             className='lmc-slide'>
                            <div className='lmc-image'>
                                <img src="https://researchdigest.files.wordpress.com/2018/08/gettyimages-520045027.jpg" alt=""/>
                            </div>
                            <div className='lmc-msg'>
                                <h2>Learn As You Grow</h2>
                                <p>Our goal is to show you investing in financial markets is easy, intuitive, and fun, no matter how much experience you have (or don’t have).</p>
                            </div>
                        </div>
                        <div id={this.state.index === 1 ? 'lmc-show' : 'lmc-hide'}
                             className='lmc-slide'>
                            <div className='lmc-image'>
                                <img src="https://www.natureindex.com/news-blog/image/5e27c008752c502e4c09fa6f" alt=""/>
                            </div>
                            <div className='lmc-msg'>
                                <h2>Manage Your Portfolio</h2>
                                <p>Keep an eye on your watch list.  Buy and sell when the price is right and see over time how your portfolio changes.</p>
                                
                            </div>
                        </div>
                        <div id={this.state.index === 2 ? 'lmc-show' : 'lmc-hide'}
                             className='lmc-slide'>   
                            <div className='lmc-image'>
                                <img src='https://images.unsplash.com/photo-1533749047139-189de3cf06d3?ixlib=rb-1.2.1&w=1000&q=80' alt=""/>
                            </div>
                            <div className='lmc-msg'>
                                <h2>Real Time News</h2>
                                <p>Keep up to date with real time news feed of what is going on with the company</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default LMC