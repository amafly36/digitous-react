import React from "react";

//    const css = {
//    fontSize: 100,};

class Box extends React.Component {
    
    renderSlider() {
        if (this.props.icon !== "local_drink" ) {
            return (
                <input type="range" id="volume" name="volume"
                min= {this.props.min} max= {this.props.max} value= {this.props.value} onChange= {this.props.onChange}></input>
            )
        }
    }

    render() { 
        
        return <div className="box col-sm-3 col-6">
            <span className="material-icons" 
 //   css integrer en objet const        style={css} 
            style={{color: this.props.color, fontSize: 100 }}>
            {this.props.icon}
           
            </span>
            <p>
                {this.props.value}
                {this.props.unit}
            </p>

            {this.renderSlider()}

            
            
        </div>
    }
}


export default Box;