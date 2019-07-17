import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SongsCollection extends React.Component {

    constructor(props) {
        super(props);
        this.returnMyIds = this.returnMyIds.bind(this);

    }

    componentDidMount() {
        this.props.fetchSongs();
    }

    returnMyIds() {
        let { collection, currentUserId } = this.props;
        let type = "Song";

        let myItems = collection.filter(item => item.followable_type === 'Song' && item.user_id === currentUserId)

        let ans = [];
        myItems.forEach(item => ans.push(item.followable_id));
        return ans;
    }

    render() {


        let myIds = this.returnMyIds();
        console.log(myIds);

        return (
            <>

            </>

        )
    }

}

export default SongsCollection;


