import React from "react";

//    const css = {
//    fontSize: 100,};

class Counter extends React.Component {
    render() {
        return  <div>
             <h2>{this.props.count}</h2>

<button 
onClick={this.props.subtractFunction}
style={{backgroundColor: "green", fontSize: "2rem"}} 
>
  -
</button>

<button 
onClick={this.props.addFunction}
style={{backgroundColor: "red", fontSize: "2rem" }} 
>
  +
</button>
        </div>
    }
}


export default Counter;