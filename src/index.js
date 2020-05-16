import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import './index.css';
import Calculadora from './calculadora';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Container className="d-flex justify-content-center mt-5">
    <Calculadora />
  </Container>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
