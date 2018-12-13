import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

const mapStateToProps = (state) => ({
    color: state.colorDate.color,
    number: state.numberDate.number
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement:() => dispatch(actions.increment()),
    onDecrement:() => dispatch(actions.decrement()),
    onSetColor: () => {
       const color = getRandomColor();
       dispatch(actions.setColor(color));
    }
});

// container component of count component
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;

