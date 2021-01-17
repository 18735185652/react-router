import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from './react-router-dom'
import Home from './component/Home'
import User from './component/User'
import Profile from './component/Profile'


// Redirect 一般配合Switch使用
ReactDOM.render(
  <Router>
    <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/user' component={User}/>
        <Route path='/profile' component={Profile}/>
        <Redirect to='/' />
    </Switch>
    
        {/* <Route path='/' exact={false} component={Home}/>
        <Route path='/user' component={User}/>
        <Route path='/profile' component={Profile}/> */}
       
  </Router>
  ,
  document.getElementById('root')
);

