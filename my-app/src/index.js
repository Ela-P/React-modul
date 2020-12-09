import React from 'react';
import ReactDOM from 'react-dom';
import SomeComponent from './commonComponents/SomeComponent/SomeComponent';

ReactDOM.render(
  <React.StrictMode>
   <SomeComponent 
    name='Alex' 
    age={5} 
    friends={[
      {name: 'Pit', age: 15}, 
      {name: 'Vitya', age: 20}, 
      {name: 'Kolya', age: 16}]}
   />
  </React.StrictMode>,
  document.getElementById('root')
);
