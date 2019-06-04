import React from "react";
import { Link } from 'react-router-dom';


class BrowseBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div className="browse-bar-module">
                    <Link className="browse-bar-featured" to="/main/browse/featured">
                        <div className="browse-bar-item">FEATURED</div> 
                    </Link>
            </div>
            </>
        )
    }

}

export default BrowseBar