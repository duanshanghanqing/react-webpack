import React from 'react';
import { connect } from 'react-redux';
import * as CounterActions from './store/actions';

@connect(
  state => ({ counter: state.counter }),
  { ...CounterActions },
)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      increment, incrementIfOdd, incrementAsync, decrement, counter,
    } = this.props;
    return (
      <p>
        Clicked:
        {' '}
        {counter}
        {' '}
times
        {' '}
        <button type="button" onClick={increment}>+</button>
        {' '}
        <button type="button" onClick={decrement}>-</button>
        {' '}
        <button type="button" onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button type="button" onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}

export default Counter;
