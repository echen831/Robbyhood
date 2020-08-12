import React, { useState } from 'react'

const RANGE = ['1d', '5d', '1m', '3m', '1y']

export const StockShowBar = (props) => {

    const [ hover, setHover ] = useState(false)
    const [ index , setIndex ] = useState(undefined)
    let { updateRange, range, stroke } = props

    const onHover = (idx) => {
        setHover(true)
        setIndex(idx)
    }

    const offHover = () => {
        setHover(false)
        setIndex(undefined)
    }

    return (
        <div className='stock-show-bar-container'>
            <ul className='stock-show-bar'>
                {RANGE.map((sRange, idx) => (
                    <button key={idx}
                            className={range === sRange ? 'selected' : ''}
                            style={range === sRange || hover && index === idx ? { color: stroke } : { color: '' }}
                            onClick={() => updateRange(sRange)}
                            onMouseOver={() => onHover(idx)}
                            onMouseOut={() => offHover()}
                    >{sRange === '5d' ? '1W' : sRange.toUpperCase()}</button>
                ))}

                {/* <button onClick={() => updateRange('1d')}
                    style={range === '1d' ? {color: stroke} : {color: ''}}
                    className={range === '1d' ? 'selected' : ''}
                >1D</button>
                <button onClick={() => updateRange('5d')}
                    style={range === '5d' ? { color: stroke } : { color: '' }}
                    className={range === '5d' ? 'selected' : ''}
                >1W</button>
                <button onClick={() => updateRange('1m')}
                    style={range === '1m' ? { color: stroke } : { color: '' }}
                    className={range === '1m' ? 'selected' : ''}
                >1M</button>
                <button onClick={() => updateRange('3m')}
                    style={range === '3m' ? { color: stroke } : { color: '' }}
                    className={range === '3m' ? 'selected' : ''}
                >3M</button>
                <button onClick={() => updateRange('1y')}
                    style={range === '1y' ? { color: stroke } : { color: '' }}
                    className={range === '1y' ? 'selected' : ''}
                >1Y</button> */}
            </ul>
        </div>
    )
};