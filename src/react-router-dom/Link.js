import React from 'react'
import {_RouterContext as RouterContext} from '../react-router'

function Link(props){
    return (
        <RouterContext.Consumer>
            {
                ({history}) =>(
                    <a {...props} onClick={
                        (event)=>{
                            event.preventDefault();
                            history.push(props.to)
                        }
                    }>{props.children}</a>
                )
            }
        </RouterContext.Consumer>
    )
}

export default Link;