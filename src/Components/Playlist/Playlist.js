import React from "react";
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist'

class Playlist extends React.Component {
    render() {
        return <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            <Tracklist isRemoval={true} onRemove={this.props.onRemove} tracks={this.props.playListTracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    }
}
export default Playlist;
