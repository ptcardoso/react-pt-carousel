import '../styles/controllers.css';
import * as React from 'react';
import LeftArrow from '../assets/angle-left-solid.svg';
import RightArrow from '../assets/angle-right-solid.svg';
export function CarouselButton(props) {
    return (React.createElement("div", { className: "carousel-button " + props.className, onClick: props.onClick },
        React.createElement("img", { src: props.icon })));
}
export function PreviousButton(props) {
    return (React.createElement(CarouselButton, { icon: LeftArrow || props.icon, onClick: props.onClick }));
}
export function NextButton(props) {
    return (React.createElement(CarouselButton, { icon: RightArrow || props.icon, onClick: props.onClick }));
}
//# sourceMappingURL=Controllers.js.map