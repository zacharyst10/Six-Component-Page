import React, { Component } from "react";



export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            heading: 12,
            increment: 2,
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleIncrease = this.handleIncrease.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)

    }

    handleChange(event) {
        this.setState({
            increment: event.target.value
        })
    }

    handleIncrease() {
        for (let i = this.state.heading; i < 32; i++) {
            this.setState({
                heading: this.state.heading + parseInt(this.state.increment)
            })
        }
    }

    handleDecrease() {
        for (let i = this.state.heading; i > 2; i--) {
            this.setState({
                heading: this.state.heading - parseInt(this.state.increment)
            })
        }
    }

    render() {
        return (
            <div className="counter-wrapper">
                

            <div id="font" style={{ fontSize: this.state.heading}}>
                {this.state.heading} PX
            </div>
            <button onClick={this.handleIncrease}>Increase</button>
            <button onClick={this.handleDecrease}>Decrease</button>
            <input type="number" placeholder="Increment By ..." onChange={this.handleChange}></input>
            </div>
        )

    }

}; 
