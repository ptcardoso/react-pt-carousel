import React, { Component } from 'react';
import {render} from 'react-dom';
import './App.css';
import { Carousel } from './lib/Carousel.tsx'
import { PreviousButton, NextButton } from './lib/Controllers';
import { Indicators } from './lib/Indicators';

const Test = ({isActive, children}) => <div>{isActive ? 'Active' : ''} {children}</div>

class App extends Component {
  renderIndicators(numItems, activeIndex, onClick) {
    return (
      <Indicators numItems={numItems} activeIndex={activeIndex}  onClick={onClick}/>
    )
  }
  renderRightControl(onClick) {
    return (
      <NextButton onClick={onClick}/>
    )
  }
  renderLeftControl(onClick) {
    return (
      <PreviousButton onClick={onClick}/>
    )
  }
  renderItems() {
    return [1,2,3,4,5].map((n) => <Test key={n}>{n}</Test>)
  }
  render() {
    const carouselProps = {
      interval: 1000,
      renderIndicators: this.renderIndicators,
      renderLeftControl: this.renderLeftControl,
      renderRightControl: this.renderRightControl
    }
    return (
      <div className="App">
        <Carousel {...carouselProps}>
          {this.renderItems()}
        </Carousel>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
