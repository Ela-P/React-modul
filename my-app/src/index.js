import React from 'react';
import ReactDOM from 'react-dom';
//import SomeComponent from './commonComponents/SomeComponent/SomeComponent';
import CounterContainer from './pages/counterPage/containers/CounterContainer';

ReactDOM.render(
  <React.StrictMode>
    <CounterContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

//  <SomeComponent 
// name='Alex' 
// age={5} 
// friends={[
//   {name: 'Pit', age: 15}, 
//   {name: 'Vitya', age: 20}, 
//   {name: 'Kolya', age: 16}]}
// /> 