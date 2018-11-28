import './indicators.scss'
import React from 'react'

export interface IndicatorsProps { onClick?: (index: number) => void, numItems: number, activeIndex: number}

export function Indicators(props: IndicatorsProps): JSX.Element {
    function handleClick(index: number) {
        if (props.onClick) {
            props.onClick(index)
        }
    }
    
    const indicators = [...Array(props.numItems)].map((_, index) => {
        return (
            <div key={index} className={`indicator ${props.activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)} />
        )
    })

    return (
        <>
            {indicators}
        </>
    )
}