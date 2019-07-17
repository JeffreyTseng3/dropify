import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ArtistsCollection extends React.Component {

    constructor(props) {
        super(props);
        this.returnMyIds = this.returnMyIds.bind(this);
        }
    
    returnMyIds() {
        let { collection, currentUserId } = this.props;
        let type = "Artist";

        let myItems = collection.filter(item => item.followable_type === 'Artist' && item.user_id === currentUserId) 
        
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

export default ArtistsCollection;


