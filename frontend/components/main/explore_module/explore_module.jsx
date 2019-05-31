import React from "react";
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
class ExploreModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (<>
        <div className="explore-module-main">
            <Route path="/main/collection"/>
            <Route path="/main/collection/playlist" />
        </div>
        </>)
    }

}

export default ExploreModule;