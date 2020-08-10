import React from 'react';

const News = ( props ) => {
    
    let { news, newsShow } = props
    
    if (!news) return null

    return (
        <div >
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
                                <img src={ process.env.NODE_ENV === "production" ? item.image : `https://www.americanachawaii.com/dynamicdata/newsImages/1News.jpg`} alt=""/>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
};

export default News