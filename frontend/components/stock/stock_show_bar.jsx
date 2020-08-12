import React from 'react'


export const StockShowBar = (props) => {

    let { updateRange, range, stroke } = props
    return (
        <div className='stock-show-bar-container'>
            <ul className='stock-show-bar'>
                <button onClick={() => updateRange('1d')}
                    style={range === '1d' ? {color: stroke} : {color: 'black'}}
                    className={range === '1d' ? 'selected' : ''}
                >1D</button>
                <button onClick={() => updateRange('5d')}
                    style={range === '5d' ? { color: stroke } : { color: 'black' }}
                    className={range === '5d' ? 'selected' : ''}
                >1W</button>
                <button onClick={() => updateRange('1m')}
                    style={range === '1m' ? { color: stroke } : { color: 'black' }}
                    className={range === '1m' ? 'selected' : ''}
                >1M</button>
                <button onClick={() => updateRange('3m')}
                    style={range === '3m' ? { color: stroke } : { color: 'black' }}
                    className={range === '3m' ? 'selected' : ''}
                >3M</button>
                <button onClick={() => updateRange('1y')}
                    style={range === '1y' ? { color: stroke } : { color: 'black' }}
                    className={range === '1y' ? 'selected' : ''}
                >1Y</button>
            </ul>
        </div>
    )
};