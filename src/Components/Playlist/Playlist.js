import React from "react";
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist'

// class Playlist extends React.Component {
    const Playlist = (props) =>{

    // constructor(props){
    //     super(props);
    //     this.handleNameChange = this.handleNameChange.bind(this);
    //
    // }



    const handleNameChange = (e) =>{
        props.onNameChange(e.target.value);
    };

    // render() {
        return <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange = {handleNameChange}/>
            <Tracklist isRemoval={true} onRemove={props.onRemove} tracks={props.PlayListTracks}/>
            <button onClick={props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    };
// }
export default Playlist;
