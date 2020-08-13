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
            </ul>
        </div>
    )
};