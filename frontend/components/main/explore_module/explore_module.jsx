import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import CollectionBarContainer from "../collection_bar/collection_bar_container";
class ExploreModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
        <div className="explore-module-main">
            <Route path="/main/collection"/>
            <Route path="/main/collection/playlist" component={CollectionBarContainer} />
        </div>
        )
    }

}

export default ExploreModule;