import * as React from 'react';
import {render} from 'react-dom';
import './App.css';
import { Carousel } from './lib/Carousel'
import { PreviousButton, NextButton } from './lib/Controllers';
import { Indicators } from './lib/Indicators';

interface TestProps {
  isActive?: boolean,
  children?: JSX.Element[] | number | string
}
const Test = (props: TestProps) => <div>{props.isActive ? 'Active' : ''} {props.children}</div>

class App extends React.Component {
  private renderIndicators(numItems: number, activeIndex: number, onClick: (index: number) => void) {
    return (
      <Indicators numItems={numItems} activeIndex={activeIndex}  onClick={onClick}/>
    )
  }
  private renderRightControl(onClick?: () => void, className?: string) {
    return (
      <NextButton onClick={onClick}/>
    )
  }
  private renderLeftControl(onClick?: () => void, className?: string) {
    return (
      <PreviousButton onClick={onClick}/>
    )
  }
  private renderItems() {
    return [1,2,3,4,5].map((n) => <Test key={n}>{n}</Test>)
  }
  public render() {
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
