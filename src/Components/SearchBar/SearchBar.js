import React, {useState} from "react";
import './SearchBar.css';
// class SearchBar extends React.Component{
const SearchBar = (props) =>{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         searchTerm: ""
    //     };

    const [searchTerm, setSearchTerm] = useState("");

    //     this.search = this.search.bind(this);
    //     this.handleTermChange = this.handleTermChange.bind(this);
    //
    // }

    const search = () =>{
       props.onSearch(searchTerm);
    };

    const handleTermChange = (e) =>{
        // this.setState ({
        //     searchTerm: e.target.value
        // })
        setSearchTerm(e.target.value)
    };

    // render() {
        return <div className="SearchBar">
            <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist"/>
            <button onClick={search} className="SearchButton">SEARCH</button>
        </div>
    };
// }
export default SearchBar;
