import React from "react";
import './Track.css';

// class Track extends React.Component {
const Track = (props) =>{

    // constructor(props){
    //     super(props);
    //     this.addTrack = this.addTrack.bind(this);
    //     this.removeTrack= this.removeTrack.bind(this);
    // }


    const  renderAction = () =>{
        if (props.isRemoval){
           return <button className="Track-action" onClick={removeTrack}>-</button>
        }else{
            return <button className="Track-action" onClick={addTrack}>+</button>
        }
    };


   const addTrack = () =>{
        props.onAdd(props.track);
    };

   const removeTrack = () =>{
        props.onRemove(props.track)
    };

    // render(){
        return (
            <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist}| {props.track.album}</p>
            </div>
                {renderAction()}
        </div>
        )
    };
// }
export default Track;
