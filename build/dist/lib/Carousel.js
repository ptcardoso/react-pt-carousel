import '../styles/styles.css';
import * as React from 'react';
import { getPreviousIndex, getNextIndex } from './helpers';
var useState = React.useState, useEffect = React.useEffect;
function renderCarouselItems(activeIndex, items) {
    return items.map(function (element, index) {
        var renderProps = {
            isActive: false,
            className: ''
        };
        if (index === activeIndex) {
            renderProps.isActive = true;
            renderProps.className = 'active';
        }
        else if (index === getPreviousIndex(activeIndex, items.length)) {
            renderProps.className = 'previous';
        }
        else if (index === getNextIndex(activeIndex, items.length)) {
            renderProps.className = 'next';
        }
        return (React.createElement("div", { key: index, className: "carousel-item " + renderProps.className }, React.cloneElement(element, { isActive: renderProps.isActive })));
    });
}
export function Carousel(props) {
    var _a = useState(0), active = _a[0], setActive = _a[1];
    var children = props.children, interval = props.interval, renderLeftControl = props.renderLeftControl, renderRightControl = props.renderRightControl, renderIndicators = props.renderIndicators;
    useEffect(function () {
        var slideTimeout = setTimeout(function () {
            setActive(getNextIndex(active, children.length));
        }, interval);
        return function () { return clearTimeout(slideTimeout); };
    });
    var handlePrevious = function () { return setActive(getPreviousIndex(active, children.length)); };
    var handleNext = function () { return setActive(getNextIndex(active, children.length)); };
    return (React.createElement("div", { className: 'carousel' },
        renderCarouselItems(active, children),
        React.createElement("div", { className: 'left-control' }, renderLeftControl(handlePrevious)),
        React.createElement("div", { className: 'right-control' }, renderRightControl(handleNext)),
        React.createElement("div", { className: 'indicators' }, renderIndicators(children.length, active, setActive))));
}
//# sourceMappingURL=Carousel.js.map