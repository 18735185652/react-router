import React from 'react';
import {UserAPI} from '../utils'
class UserAdd extends React.Component{
    nameRef = React.createRef();
   
    handleSubmit = (event)=>{
        event.preventDefault();
        let name = this.nameRef.current.value
        UserAPI.add({id: Date.now()+'',name});
        this.props.history.push('/user/list')
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
               <input ref={this.nameRef}/>
               <button type="submit">提交</button>
            </form>
        )
    }
}

export default UserAdd;