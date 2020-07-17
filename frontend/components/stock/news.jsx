import React from 'react';

class News extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newsShow: false
        }
    }

    render() {
        let { newsShow } = this.state
        return (
            <div className='company-news-container'>
                <div className='company-news-header'>
                    <p>News</p>
                    <p onClick={() => this.setState({ newsShow: !newsShow })}>{!newsShow ? 'show' : 'hide'}</p>
                </div>
            </div>
        )
    }
};

export default News