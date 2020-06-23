import React from "react";
import './Tracklist.css';
import Track from '../Track/Track'

class Tracklist extends React.Component {
    render() {
        return <div className="TrackList">
                {
                  this.props.tracks && this.props.tracks.map(track => {//put a check on .map to render the tracks or else you get property of .map undefined
                console.log(track);
                        return <Track onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} track={track}
                                      key={track.id}/>
                    })
                }
            </div>

    }
}

export default Tracklist;
