import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from './react-router-dom'
import Home from './component/Home'
import User from './component/User'
import Profile from './component/Profile'

ReactDOM.render(
  <Router>
    <>
        <Route path='/' exact={false} component={Home} exact/>
        <Route path='/user' exact={false} component={User}/>
        <Route path='/profile' component={Profile}/>
    </>
  </Router>
  ,
  document.getElementById('root')
);

