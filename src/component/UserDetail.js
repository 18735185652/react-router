import React from 'react';
import {UserAPI} from '../utils'

class UserDetail extends React.Component{
   state={user:{}}
   componentDidMount(){
       let user = this.props.location.state;
       if(!user){
           let id = this.props.match.params.id
           user= UserAPI.find(id)
       }
       if(user){
           this.setState({user})
       }
   }
    render(){
        let {user} = this.state;
        return (
            <div>
               <p>ID:{user.id}</p>
                <p>name:{user.name}</p>
            </div>
        )
    }
}

export default UserDetail;