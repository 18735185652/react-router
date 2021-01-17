import React from 'react'
import RouterContext from './RouterContext';
import matchPath from './matchPath'
class Route extends React.Component {
    static contextType = RouterContext
    render() {
        const { history, location } = this.context;
        console.log('location: ', location);
        const { component: RouteComponent, computedMatch,render } = this.props;

        const match = computedMatch ? computedMatch : matchPath(location.pathname, this.props)
        let routeProps = { history, location };
        let element = null;
        if (match) {
            // 路由属性 如果一个组件是Route或者说路由组件渲染的，他们routeProps={}
            routeProps.match = match
            if(RouteComponent){
                element = <RouteComponent {...routeProps} />
            }else if(render){
                element = render(routeProps) 
            }
            
        }
        return element;
    }
}
export default Route;