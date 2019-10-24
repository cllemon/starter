import { hot } from 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';
import Router from './router/index';
import './style/global.css';

const App = hot(module)(() => (
  <div className="app">
    <Router />
  </div>
));

ReactDom.render(<App />, document.getElementById('root'));
