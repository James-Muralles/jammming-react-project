import React from "react";
import './Tracklist.css';
import Track from '../Track/Track'

// class Tracklist extends React.Component {
const Tracklist = (props) =>{

    // render() {
        return (
    <div className="TrackList">
                {
                  props.tracks && props.tracks.map(track => {//put a check on .map to render the tracks or else you get property of .map undefined
                console.log(track);
                        return <Track onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval} track={track}
                                      key={track.id}/>
                    })
                }
            </div>
        )
    };
// }

export default Tracklist;
