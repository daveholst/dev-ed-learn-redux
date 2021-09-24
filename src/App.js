// import logo from './logo.svg';
import './App.css';
import maths from './assets/calculation-math.gif';

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, change } from "./actions";


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const changeAmount = useSelector(state => state.change)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <img src={maths} alt="good-maths-pic" />
      <h1>Good Redux Counter</h1>
      <h2>Count @ {counter}</h2>
      <div>
      <button onClick={()=> dispatch(increment(changeAmount))}> + </button>
      <button onClick={() => dispatch(decrement(changeAmount))}> - </button>

      </div>
      <br />
      <br />
      <h2>Change Amount:</h2>
      <input
        type="number"
        value={changeAmount}
        onChange={ (event) => dispatch(change(parseInt(event.target.value) || 1))
        }
      />

      {isLogged && <h3>Valuable Information I shouldn't see</h3>}
    </div>
  );
}

export default App;
