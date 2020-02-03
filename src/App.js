import React,{ useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const initialState = 0;

  const Store = {
    state: counter
  }

  const dispatch = (actionFunc) => {
     Reducer(Store.state, actionFunc)
    } 
  
  const Reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT') {
        setCounter(state+1)
    }
  }
  const incComp = () => {
    dispatch(incAction())
  }

  const incAction = () => {
    return {
      type: 'INCREMENT'
    }
  }
  return (
    <div className="App">
        <p>
          Counter: <code> {Store.state} </code> 
        </p>
        <button onClick={incComp}>INC</button>
    </div>
  );
}

export default App;
