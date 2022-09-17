import React, { useReducer } from 'react';

const InitialState = {
  count : 0
}

const INCREMENT = 'INCREMENT';
const DECCREMENT = 'DECCREMENT';
const INCREMENTBYAMOUNT = 'INCREMENTBYAMOUNT';
const RESET = 'RESET';

type stateCounterType = {
  count : number
}

type incrementActionType = {type : typeof INCREMENT}
type incrementByAmountActionType = {type : typeof INCREMENTBYAMOUNT, payload : number}
type decrementActionType = {type : 'DECCREMENT'}
type resetActionType = {type : 'RESET'}

type CounterActionType = incrementActionType | decrementActionType | resetActionType | incrementByAmountActionType;

const reducer = (state : stateCounterType, action : CounterActionType) => {
  switch(action.type){

    case INCREMENT:
      return {count : state.count + 1}
      break;
    
    case DECCREMENT:
      return {count : state.count - 1}
      break;
    
    case INCREMENTBYAMOUNT:
      return {count : state.count + action.payload}
      break;

    case RESET:
      return {count : 0}
      break;

    default:
      throw new Error();

  }
}

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <>
      <div>
        <h1>Count : {state.count}</h1>
        <button onClick={() => {dispatch({type  : INCREMENT})}}>Increment</button>
        <button onClick={() => {dispatch({type  : RESET})}}>Reset</button>
        <button onClick={() => {dispatch({type  : DECCREMENT})}}>Decrement</button>
        <button onClick={() => {dispatch({type  : INCREMENTBYAMOUNT, payload : 5})}}>Increment By Amount</button>
      </div>
    </>
  )
}

export default Counter;
