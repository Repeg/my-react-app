import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Index from './views/index'
import Beauty from './views/beauty'
import Covid from './views/covid'

import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Route exact path='/home' component={Index} />
      <Route exact path='/beauty' component={Beauty} />
      <Route exact path='/covid' component={Covid} />
    </Router>
  );
}

export default App;
