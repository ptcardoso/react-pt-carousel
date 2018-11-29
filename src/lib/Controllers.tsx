import './controllers.css'
import * as React from 'react'
import LeftArrow from '../assets/angle-left-solid.svg'
import RightArrow from '../assets/angle-right-solid.svg'

export interface CarouselButtonProps { icon?: any, onClick?: () => void, className?: string}

export function CarouselButton(props: CarouselButtonProps): JSX.Element {
    return (
        <div className={`carousel-button ${props.className}`} onClick={props.onClick}>
            <img src={props.icon} />
        </div>
    )
}

export function PreviousButton(props: CarouselButtonProps) : JSX.Element {
    return (
        <CarouselButton icon={LeftArrow || props.icon} onClick={props.onClick}/>
    )
}

export function NextButton(props: CarouselButtonProps) {
    return (
        <CarouselButton icon={RightArrow || props.icon} onClick={props.onClick}/>
    )
}