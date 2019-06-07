import React from "react";
import { Link } from 'react-router-dom';

class SearchModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

    
        return (
            <>
                <div className="search-module">
                    <img
                        className='search-photo'
                        src="https://dropify-seeds.s3.amazonaws.com/Screen+Shot+2019-06-07+at+3.00.44+AM.png" />
                    
                </div>
            </>)
    }
}

export default SearchModule;