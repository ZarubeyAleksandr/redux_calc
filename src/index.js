import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux';
import { createStore } from 'redux';
import Calculator from './components';
import { calcReducer } from './reducers';

const mapStateToProps = (state) => {
  return{
    value: state.value,
    btns: state.btns
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addElem: (text) => {
      dispatch({
        type: 'ADD_ELEM',
        text
      })
    },
    clear: () => {
      dispatch({
        type: 'CLEAR'
      })
    },
    equal: (value) => {
      dispatch({
        type: 'EQUAL',
        value
      })
    }
  }
}


const Calc = connect(mapStateToProps, mapDispatchToProps)(Calculator);
const store = createStore(calcReducer);

ReactDOM.render(
    <Provider store={store}>
        <Calc />
    </Provider>
    , document.getElementById('root'));
