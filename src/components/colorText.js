import React, { Component } from "react";



export default class ColorText extends Component {
    constructor() {
        super();

        this.state = {
            heading: "Change My Text or Just Color me or Both",
            color: "black",
            colorInput: "black",
            headingInput: "Change My Text or Just Color me or Both",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            color: this.state.colorInput,
            heading: this.state.headingInput
        })
    }

    render() {
        return (
            <div className="color-text-wrapper">
                <h2 style={{ color: this.state.color }}>{this.state.heading}</h2>

                <form onSubmit={this.handleSubmit}>

                    <input type="color" name="colorInput" onChange={this.handleChange} />
                    <input type="text" name="headingInput" onChange={this.handleChange} placeholder="type to change the text above" />

                    <button type="submit">Submit Change</button>

                </form>
            </div>
        )

    }

};