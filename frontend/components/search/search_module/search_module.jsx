import React from "react";
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar';
import SearchResultsContainer from '../search_results/search_results_container';

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
            if (e.target.value === '') {
                this.props.history.push('/main/search/recent')
            } else {
                this.props.history.push(`/main/search/results/${e.target.value}`);
            }
            search(e.target.value);
        };
    }


    componentDidMount() {
        const input = this.myInputRef.current;
        input.focus();
    }

    render() {

      
        let searchBarRoute = this.props.location.pathname !== "/main/search/recent" ? <Route path="/main/search/results/:input" component={SearchBar} /> : (
            <div className='search-empty-text'>
                <div className="search-empty-dropify">Search Dropify</div>
                <div className='search-empty-details'>Find your favorite songs, artists, albums, podcasts and playlists.</div>
            </div>
        ) ;

        let searchResultsRoute = this.props.location.pathname !== "/main/search/recent" ? <Route path="/main/search/results/:input" component={SearchResultsContainer} /> : null;
   
   
         
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
                            {searchBarRoute}
                            {searchResultsRoute}
                    </div>

                </div>
            </>)
    }
}

export default SearchModule;