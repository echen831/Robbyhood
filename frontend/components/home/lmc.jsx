import React from 'react'

class LMC extends React.Component {
    constructor() {
        super()

        this.state = {
            index: 0
        }
    }
    
    render() {
        return (
            
            <div className='lmc-body'>
                <div className='lmc-content'>
                    <div className='lmc-actions'>
                        <ul>
                            <div>Up</div>
                            <div>Learn</div>
                            <div>Manage</div>
                            <div>Customize</div>
                            <div>Down</div>
                        </ul>
                    </div>
                    <div className='lmc-image'>
                        <div>
                            <div>Image1</div>
                            <div>Content1</div>
                        </div>
                        <div>
                            <div>Image2</div>
                            <div>Content2</div>
                        </div>
                        <div>   
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