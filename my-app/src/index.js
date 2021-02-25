import React from 'react';
import ReactDOM from 'react-dom';

import Routes from "./routs/Routes";
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes/>
  </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

