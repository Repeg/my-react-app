import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/js/ES6';

import './assets/css/App.css';
import Index from './components/index'
import Beauty from './components/beauty'
import Covid from './components/covid'
import TaskList from './components/taskList'
import AddTask from './components/addTask'
import Counter from './containers/counter'

import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Index} />
      <Route exact path='/home' component={Index} />
      <Route exact path='/beauty' component={Beauty} />
      <Route exact path='/covid' component={Covid} />
      <Route exact path='/IWant2See' component={TaskList} />
      <Route exact path='/addTask' component={AddTask} />
      <Route exact path='/counter' component={Counter} />
    </Router>
  );
}

export default App;
