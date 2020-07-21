import React, { Component } from "react";

class Counter extends Component {
    handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.currentTarget);
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submit");
    };

    handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
        console.log("Coppied!");
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Simple text:
                    <input onCopy={this.handleCopy} onFocus={this.handleFocus} type="text" name="text" />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

const App = () => <Counter />;

export default App;
