import * as tslib_1 from "tslib";
import * as React from 'react';
import { render } from 'react-dom';
import './App.css';
import { Carousel } from './lib/Carousel';
import { PreviousButton, NextButton } from './lib/Controllers';
import { Indicators } from './lib/Indicators';
var Test = function (props) { return React.createElement("div", null,
    props.isActive ? 'Active' : '',
    " ",
    props.children); };
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.renderIndicators = function (numItems, activeIndex, onClick) {
        return (React.createElement(Indicators, { numItems: numItems, activeIndex: activeIndex, onClick: onClick }));
    };
    App.prototype.renderRightControl = function (onClick, className) {
        return (React.createElement(NextButton, { onClick: onClick }));
    };
    App.prototype.renderLeftControl = function (onClick, className) {
        return (React.createElement(PreviousButton, { onClick: onClick }));
    };
    App.prototype.renderItems = function () {
        return [1, 2, 3, 4, 5].map(function (n) { return React.createElement(Test, { key: n }, n); });
    };
    App.prototype.render = function () {
        var carouselProps = {
            interval: 1000,
            renderIndicators: this.renderIndicators,
            renderLeftControl: this.renderLeftControl,
            renderRightControl: this.renderRightControl
        };
        return (React.createElement("div", { className: "App" },
            React.createElement(Carousel, tslib_1.__assign({}, carouselProps), this.renderItems())));
    };
    return App;
}(React.Component));
render(React.createElement(App, null), document.getElementById("root"));
//# sourceMappingURL=index.js.map