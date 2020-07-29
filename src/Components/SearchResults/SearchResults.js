import React from "react";
import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist'

// class SearchResults extends React.Component {
const SearchResults = (props) => {


    // render() {
        return <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist onAdd={props.onAdd} isRemoval={false} tracks={props.searchResults}/>
        </div>
    };
// }
export default SearchResults;
