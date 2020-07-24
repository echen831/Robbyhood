import React from 'react';

class News extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     newsShow: false
        // }
    }

    render() {
        // let { newsShow } = this.state
        let { news, newsShow } = this.props

        if (!news) return null

        return (
            <div >
                {/* <div className='company-news-header'>
                    <p>News</p>
                    <p onClick={() => this.setState({ newsShow: !newsShow })}>{!newsShow ? 'show' : 'hide'}</p>
                </div> */}
                <div className={newsShow ? 'news-container' : 'display-none'}>
                    {news.map((item, idx) => (
                        <a href={item.url} key={idx} target='_blank'>
                            <div className='news-item'>
                                <div className='news-item-left'>
                                    <p id='news-datetime'>{`${item.source} ${item.datetime}`}</p>
                                    <p id='news-headline'>{item.headline}</p>
                                    <p id='news-sum'>{item.summary}</p>
                                </div>
                                <div className='news-item-right'>
                                    <img src={ item.image ? item.image : `https://www.americanachawaii.com/dynamicdata/newsImages/1News.jpg`} alt=""/>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        )
    }
};

export default News