import React from 'react';
import UserList from './UserList'
import UserAdd from './UserAdd'
import UserDetail from './UserDetail'
import {Route,Link, Switch} from '../react-router-dom'


const User = (props) =>{

    return (
        <div>
            <ul>
                <li>< Link to='/user/list' > 用户列表</ Link>  </li>
                <li>< Link to='/user/add' > 添加用户</ Link>  </li>
             </ul>
             <Switch>
                <Route path='/user/list' exact={true} component={UserList}/>
                <Route path='/user/add' exact={true}  component={UserAdd}/>
                <Route path='/user/detail/:id' exact={true} component={UserDetail}/>
             </Switch>
          
        </div>
    )
}

export default User;