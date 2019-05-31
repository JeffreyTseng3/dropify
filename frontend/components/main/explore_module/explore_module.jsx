import React from "react";
import { Link } from 'react-router-dom';

class ExploreModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (<>
        <div className="explore-module-main">
                <ProtectedRoute path="/collection" component={} />



        </div>
        </>)
    }

}

export default ExploreModule;