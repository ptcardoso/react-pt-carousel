import './indicators.css'
import * as React from 'react'

export interface IndicatorsProps { onClick?: (index: number) => void, numItems: number, activeIndex: number}

export function Indicators(props: IndicatorsProps): JSX.Element {
    function handleClick(event: React.SyntheticEvent<HTMLDivElement>) {
        if (props.onClick) {
            props.onClick(parseInt(event.currentTarget.dataset.arg || '0', 10))
        }
    }
    
    const indicators = [...Array(props.numItems)].map((_, index) => {
        return (
            <div key={index} data-arg={index} className={`indicator ${props.activeIndex === index ? 'active' : ''}`} onClick={handleClick} />
        )
    })

    return (
        <>
            {indicators}
        </>
    )
}