import React from 'react'
import {Router} from '../react-router';
import {createBrowserHistory} from '../history';
//创建相应的历史对象，并且传入Router组件，原样渲染子组件
class BrowserRouter extends React.Component{
    //不管是哪种创建历史对象的方法，得到的history 长的都一样，都像window.history
    history = createBrowserHistory(this.props)//window.history  
    render(){   
        return (
            <Router history={this.history}>
                {this.props.children}
            </Router>
        )
    }
}
export default BrowserRouter;