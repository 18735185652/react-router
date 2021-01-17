import React from 'react';
import {Route,Redirect} from '../react-router-dom'


const Protected = (props) =>{
    let {path,component:RouteComponent} = props

    return (
        <Route path={path} render={
            (routeProps)=>{ // history,location,match
                return (
                    localStorage.getItem('login')? <RouteComponent {...routeProps}/>
                     : <Redirect to={{pathname:'/login',state:{from:path}}}/>
                )
            }
        }>

        </Route>
    )


}
export default Protected;

/**
 * 
 * 指定一个Route组件要渲染的内容有三种方式
 * 1. component属性 值是一个组件的类型 它不能写定义的逻辑
 * 2. render属性 它是一个函数，如果路径匹配的话，就渲染函数执行返回的内容
 * 3. children属性 它也是一个函数 
 */