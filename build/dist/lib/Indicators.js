import '../styles/indicators.css';
import * as React from 'react';
export function Indicators(props) {
    function handleClick(event) {
        if (props.onClick) {
            props.onClick(parseInt(event.currentTarget.dataset.arg || '0', 10));
        }
    }
    var indicators = Array(props.numItems).slice().map(function (_, index) {
        return (React.createElement("div", { key: index, "data-arg": index, className: "indicator " + (props.activeIndex === index ? 'active' : ''), onClick: handleClick }));
    });
    return (React.createElement(React.Fragment, null, indicators));
}
//# sourceMappingURL=Indicators.js.map