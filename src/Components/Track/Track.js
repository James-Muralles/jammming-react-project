import React from "react";
import './Track.css';

class Track extends React.Component {
    renderAction(){
        if (this.props.isRemoval){
           return <button className="Track-action">-</button>
        }else{
            return <button className="Track-action">+</button>
        }
    }

    render(){
        return (
            <div className="Track">
            <div className="Track-information">
                <h3>Born Sinner</h3>
                <p>J.Cole| Born Sinner</p>
            </div>
                {this.renderAction()}
        </div>
        )
    }
}
export default Track;
