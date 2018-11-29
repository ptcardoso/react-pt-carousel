import '../styles/styles.css'
import * as React from 'react'
import {getPreviousIndex, getNextIndex} from './helpers'

const {useState, useEffect} = React

function renderCarouselItems(activeIndex: number, items: JSX.Element[]): JSX.Element[] {
    return items.map((element, index) => {
        const renderProps = {
            isActive: false,
            className: ''
        }
        if (index === activeIndex) {
            renderProps.isActive = true;
            renderProps.className = 'active';
        } else if (index === getPreviousIndex(activeIndex, items.length)) {
            renderProps.className = 'previous'
        } else if (index === getNextIndex(activeIndex, items.length)) {
            renderProps.className = 'next'
        }
        return (
            <div key={index} className={`carousel-item ${renderProps.className}`}>
                {React.cloneElement(element, { isActive: renderProps.isActive })}
            </div>
        )
    })
}

export interface CarouselProps {
    interval: number,
    children: JSX.Element[],

    renderIndicators: (numItems: number, activeIndex: number, onClick: (index: number) => void) => JSX.Element,
    renderLeftControl: (onClick: () => void) => JSX.Element,
    renderRightControl: (onClick: () => void) => JSX.Element,
}

export function Carousel(props : CarouselProps): JSX.Element {
    
    const [active, setActive] = useState(0)

    const {children, interval, renderLeftControl, renderRightControl, renderIndicators} = props

    useEffect(() => {
        const slideTimeout = setTimeout(() => {
            setActive(getNextIndex(active, children.length))
        }, interval)
        return () => clearTimeout(slideTimeout)
    })

    const handlePrevious = () => setActive(getPreviousIndex(active, children.length))
    const handleNext = () => setActive(getNextIndex(active, children.length))

    return (
        <div className='carousel'>
            {renderCarouselItems(active, children)}

            <div className='left-control'>
                {renderLeftControl(handlePrevious)}
            </div>
            <div className='right-control'>
                {renderRightControl(handleNext)}
            </div>
            <div className='indicators'>
                {renderIndicators(children.length, active, setActive)}
            </div>
        </div>
    )
}
