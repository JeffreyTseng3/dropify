import React from "react";
import BrowseBarContainer from '../browse_bar/browse_bar_container';
import BrowseAreaContainer from '../browse_area/browse_area_container';

class BrowseModule extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <div className="browse-module">
                <BrowseBarContainer /> 
                <BrowseAreaContainer />
                </div>
            </>
        )
    }
}

export default BrowseModule