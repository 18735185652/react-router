import React from 'react'
import RouterContext from './RouterContext';
import matchPath from './matchPath'
class Route extends React.Component {
    static contextType = RouterContext
    render() {
        const { history, location } = this.context;
        console.log('location: ', location);
        const { component: RouteComponent, computedMatch } = this.props;

        const match = computedMatch ? computedMatch : matchPath(location.pathname, this.props)
        let routeProps = { history, location };
        let element = null;
        if (match) {
            routeProps.match = match
            element = <RouteComponent {...routeProps} />
        }
        return element;
    }
}
export default Route;