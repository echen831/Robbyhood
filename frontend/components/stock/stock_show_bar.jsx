import React from 'react'


export const StockShowBar = (props) => {

    let { updateRange, range } = props
    return (
        <div className='stock-show-bar-container'>
            <ul className='stock-show-bar'>
                <button onClick={() => updateRange('1d')}
                    className={range === '1d' ? 'selected' : ''}
                >1D</button>
                <button onClick={() => updateRange('5d')}
                    className={range === '5d' ? 'selected' : ''}
                >1W</button>
                <button onClick={() => updateRange('1m')}
                    className={range === '1m' ? 'selected' : ''}
                >1M</button>
                <button onClick={() => updateRange('3m')}
                    className={range === '3m' ? 'selected' : ''}
                >3M</button>
                <button onClick={() => updateRange('1y')}
                    className={range === '1y' ? 'selected' : ''}
                >1Y</button>
            </ul>
        </div>
    )
};