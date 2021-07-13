import React from "react"
import './App.css';

import Counter from "./components/counter";

class App extends React.Component {
    constructor() {
      super();

      this.state = {
        count: 0,
      };
    }
//  Mon addFunction

    addFunction = () => {
      this.setState({
        count: this.state.count + 1,
      })
    }

// Mon subtractFuction

    subtractFunction = () => {
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 1,
        })
      }
     
    }

    render() {
      return (
		<div>
			<h1>Counter</h1>
      
      <Counter count={this.state.count} addFunction={this.addFunction} subtractFunction={this.subtractFunction}/>
		</div>
	)
    }
}


export default App;
