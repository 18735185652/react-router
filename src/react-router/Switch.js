import React from 'react'
import RouterContext from './RouterContext';
import matchPath from './matchPath'

class Switch extends React.Component {
    static contextType = RouterContext;

    render(){
        const {location} = this.context;
        let element,match;
        // this.props.children可以是undfined,[],{},字符串 或者数字
        React.Children.forEach(this.props.children,child=>{
       
            if(!match && React.isValidElement(child) ){
                element=child;          
                match = matchPath(location.pathname,child.props)
            }
        })
        // for(let i =0;i<this.props.children.length;i++){
        //     let child = this.props.children[i];
        //     element=child;
        //     match = matchPath(location.pathname,child.props)
        //     if(match) break;
        // }

        return match ? React.cloneElement(element,{computedMatch:match}) : null;


    }
}

export default Switch