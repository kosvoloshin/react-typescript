import React, { Component } from "react";

type CounterProps = {
    readonly title?: string;
};

type CounterState = {
    count: number;
};

class Counter extends Component<CounterProps, CounterState> {
    state = {
        count: 0,
    };

    static defaultProps: CounterProps = {
        title: "Default Counter: ",
    };

    static getDeriverStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
        return false ? { count: 2 } : null;
    }

    componentDidMount(): void {}

    shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
        return true;
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <>
                <h1>
                    {this.props.title}
                    {this.state.count}
                </h1>
                <button onClick={this.handleClick}>+1</button>
            </>
        );
    }
}

const App = () => <Counter />;

export default App;
