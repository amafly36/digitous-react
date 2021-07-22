import React, { Component } from 'react'



class Mylist extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    addMylist(e) {
        e.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        })
    }

    renderMylists() {
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item} | <button>x</button>
                </div>
            );
        });
    }

    render() {
        return(
            <div>
                <h1>hello world</h1>
                <form className="p-5">
                
                
                
                <input 
                    value={this.state.userInput} type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"
                    onChange={this.onChange.bind(this)}
                />
                <button onClick={this.addMylist.bind(this)} className="btn btn-primary">Add</button>
                
               
                </form>
                <div className="p-5">
                    {this.renderMylists()}
                </div>
            </div>
        );
    }
}


export default Mylist;