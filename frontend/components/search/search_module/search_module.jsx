import React from "react";
import { Link } from 'react-router-dom';

class SearchModule extends React.Component {
    constructor(props) {
        super(props);
        this.myInputRef = React.createRef();
        this.state = {
            searchInput: ""
        }
    }

  
    handleInput() {
        let { search } = this.props;
        return (e) => {
            this.setState({ searchInput: e.target.value });
            this.props.history.push(`/main/search/${e.target.value}`);
            search(e.target.value);
        };
    }

    // componentDidUpdate(ownProps) {
    //     // debugger
    // }

    componentDidMount() {
        const input = this.myInputRef.current;
        input.focus();
    }

    render() {

        let searchBar = (<div className="search-results-bar">
            <div>Top Results</div>
            <div>Artists</div>
            <div>Songs</div>
            <div>Albums</div>
            <div>Playlists</div>
        </div>)

    
        return (
            <>
                <div className="search-module">
                    <input 
                        onChange={this.handleInput()}
                        className="search-bar"
                        value={this.state.searchInput}
                        placeholder="Start typing..."
                        type="text"
                        ref={this.myInputRef}/>

                    <div className="search-results">
                    
                    </div>

                </div>
            </>)
    }
}

export default SearchModule;