import React, { Component } from "react";
import ReactDOM from "react-dom";

type PortalProps = {
    children: React.ReactNode;
};

class Portal extends Component<PortalProps> {
    private el: HTMLDivElement = document.createElement("div");

    public componentDidMount(): void {
        document.body.appendChild(this.el);
    }

    public componentWillUnmount(): void {
        document.body.removeChild(this.el);
    }

    public render(): React.ReactElement<PortalProps> {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

const App = () => (
    <>
        <div>this is root</div>
        <Portal>
            <h2>this is portal</h2>
        </Portal>
    </>
);

/*
interface IContext {
  isAuth: Boolean,
  toggleAuth: () => void,
}

// Context creation
const AuthContext = React.createContext<IContext>({
  isAuth: false,
  toggleAuth: () => {},
});

// Inner component (new syntax of static property)
class Login extends Component {

  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>

  render() {
    const { toggleAuth, isAuth } = this.context;

    return (
      <button onClick={toggleAuth}>
        {!isAuth ? 'Login' : 'Logout'}
      </button>
    );
  }
}
*/

export default App;
