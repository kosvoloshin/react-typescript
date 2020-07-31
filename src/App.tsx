import React, { Component, useState, useRef, useReducer } from "react";

/* ------ useState ------ */
// 1 example
// const [value, setValue] = useState(0);

// 2 example
// const [value, setValue] = useState<number | undefined>(undefined);
// const [value, setValue] = useState<Array<number>>([]);

// 3 example
// interface IUser {
//   name: string;
//   age?: number;
// }

// const [value, setValue] = useState<IUser>({ name: "Max" });

/* ------ useRef ------ */

// const ref1 = useRef<HTMLElement>(null!);
// const ref2 = useRef<HTMLElement | null>(null);

/* ------ useContext ------ */

// interface ITheme {
//   backgroundColor: string;
//   color: string;
// }

// // Context creation
// const ThemeContext = createContext<ITheme>(ThemeContext);

/* ------ useReducer ------ */

// interface State {
//   count: number;
// }

// type Action = { type: "increment" | "decrement" }

// const counterReducer = ({ count }: State, { type }: Action) => {
//   switch (type) {
//     case "increment": return { count: count + 1 };
//     case "decrement": return { count: count - 1 };
//     default: return {};
//   }
// }

// const [state, dispatch] = useReducer(counterReducer, { count: 0 });

// dispatch({ type: "increment" });
// dispatch({ type: "decrement" });

const App = () => (
    <>
        <div>this is root</div>
    </>
);

export default App;
