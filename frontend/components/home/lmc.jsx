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
                        <div className={this.state.index === 0 ? 'lmc-show' : 'lmc-hide'}>
                            <div>Image1</div>
                            <div>Content1</div>
                        </div>
                        <div className={this.state.index === 1 ? 'lmc-show' : 'lmc-hide'}>
                            <div>Image2</div>
                            <div>Content2</div>
                        </div>
                        <div className={this.state.index === 2 ? 'lmc-show' : 'lmc-hide'}>   
                            <div>Image3</div>
                            <div>Content3</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default LMC