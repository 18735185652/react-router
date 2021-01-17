import React from 'react'
import LifeCycle from './LifeCycle'
import RouterContext from './RouterContext';

function Redirect({to}){
    return (
        <RouterContext.Consumer>
            {
                value =>(
                    <LifeCycle  onMount={()=>{value.history.push(to)}}/>
                )
            }
        </RouterContext.Consumer>
    )
}

export default Redirect;
