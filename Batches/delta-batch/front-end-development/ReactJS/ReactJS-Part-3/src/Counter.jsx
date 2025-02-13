import { useState } from "react";

function init() {
    console.log("init was executed");
    return Math.random();
}

export default function Counter() {
    // const [stateVariable, setStateVariable] = useState(initialState);
    let [count, setCount] = useState(init); // initialization
    console.log("component was re-rendered");

    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });

        setCount((currCount) => {
            return currCount + 1;
        });

        // setCount(25);
    };

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}