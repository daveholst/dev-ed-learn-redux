import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import the store
import { createStore } from 'redux'



// ACTION - INCREMENT
const incrememnt = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrememnt = () => {
  return {
    type: 'DECREMENT'
  }
}

// REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}
// STORE
const store = createStore(counter)

// Display in console
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(incrememnt())
store.dispatch(decrememnt())
store.dispatch(decrememnt())


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
