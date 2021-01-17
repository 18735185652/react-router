import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Redirect,Link} from './react-router-dom'
import Home from './component/Home'
import User from './component/User'
import Profile from './component/Profile'
import Protected from './component/Protected'
import Login from './component/Login'

// exact=false path=/user 可以匹配到 /user/xxx   true只能匹配/user
// Redirect 一般配合Switch使用
ReactDOM.render(
  <Router>
    <ul>
      <li>< Link to='/' > 首页</ Link>  </li>
      <li>< Link to='/user' > 用户管理</ Link>  </li>
      <li>< Link to='/profile' > 个人中心</ Link>  </li>
    </ul>

    <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/user' component={User}/>
        <Route path='/login' component={Login}/>
        <Protected path='/profile' component={Profile}/>
        <Redirect to='/' />
    </Switch>
    
        {/* <Route path='/' exact={false} component={Home}/>
        <Route path='/user' component={User}/>
        <Route path='/profile' component={Profile}/> */}
       
  </Router>
  ,
  document.getElementById('root')
);

