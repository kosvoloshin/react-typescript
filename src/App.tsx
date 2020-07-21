import React, { Component, Fragment } from "react";

type Position = {
    id: string;
    value: string;
    title: string;
};

type FormState = {
    inputText: string;
    textareaText: string;
    selectText: string;
    showData: {
        name: string;
        text: string;
        position: string;
    };
};

const POSITIONS: Array<Position> = [
    {
        id: "fd",
        value: "front",
        title: "front",
    },
    {
        id: "bd",
        value: "back",
        title: "back",
    },
];

const DEFAULT_SELECT_VALUE: string = POSITIONS[0].value;

const styles: React.CSSProperties = { display: "block", marginBottom: "10px" };
class Form extends Component<{}, FormState> {
    state = {
        inputText: "",
        textareaText: "",
        selectText: DEFAULT_SELECT_VALUE,
        showData: {
            name: "",
            text: "",
            position: "",
        },
    };

    private rootRef = React.createRef<HTMLSelectElement>();

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {
            target: { value: inputText },
        } = e;
        this.setState({ inputText });
    };

    handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const {
            target: { value: textareaText },
        } = e;
        this.setState({ textareaText });
    };

    handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const {
            target: { value: selectText },
        } = e;
        this.setState({ selectText });
    };

    handleShow = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const { inputText, textareaText, selectText } = this.state;
        this.setState({
            inputText: "",
            textareaText: "",
            selectText: "",
            showData: {
                name: inputText,
                text: textareaText,
                position: selectText,
            },
        });
    };

    render() {
        const { inputText, textareaText, selectText, showData } = this.state;
        const { name, text, position } = showData;

        return (
            <Fragment>
                <form>
                    {/* Input */}
                    <label>
                        Name:
                        <input type="text" name="name" value={inputText} onChange={this.handleInputChange} />
                    </label>
                    {/* Textarea */}
                    <br />
                    <label htmlFor="text">Text:</label>
                    <textarea id="text" value={textareaText} onChange={this.handleTextareaChange} />
                    {/* Select */}
                    <select ref={this.rootRef} value={selectText} onChange={this.handleSelectChange}>
                        {POSITIONS.map(({ id, value, title }) => (
                            <option key={id} value={value}>
                                {title}
                            </option>
                        ))}
                    </select>
                    {/* Button */} <br />
                    <button onClick={this.handleShow}>Show</button>
                </form>
                <h2>{name}</h2>
                <h3>{text}</h3>
                <h3>{position}</h3>
            </Fragment>
        );
    }
}

const App = () => <Form />;

export default App;
