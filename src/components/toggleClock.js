import React, { Component } from "react";



export default class ToggleClocks extends Component {
    constructor() {
        super();

        this.state = {
            time: new Date().toLocaleTimeString(),
            isShown: true,
            display: "block"
        }

        this.ToggleClock = this.ToggleClock.bind(this)

    }

    componentDidMount() {
        this.liveTime = setInterval(() => {
            this.setState({
                time: String(new Date().toLocaleTimeString()),
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.liveTime)
    }

    ToggleClock() {
        if (this.state.isShown) {
            this.setState({
                time: "",
                isShown: false,
                display: "none",
            })
            this.componentWillUnmount;
        } else {
            this.setState({
                time: new Date().toLocaleTimeString(),
                isShown: true,
                display: "block",
            })
        }
    }


    render() {
        return (
             <div className="moment-wrapper">
                
                 <h2 style={{ display: this.state.display}}>{this.state.time}</h2>

                 <button onClick={this.ToggleClock}>Hide Clock</button>
            </div>

              
        )
    
    }
        
};