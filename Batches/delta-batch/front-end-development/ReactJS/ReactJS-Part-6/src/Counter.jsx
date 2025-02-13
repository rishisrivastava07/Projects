import { useState, useEffect } from "react"

export default function Counter() {
    let [countX, setCountX] = useState(0);
    let [countY, setCountY] = useState(0);

    let incCountX = () => {
        setCountX(currCountX => currCountX + 1);
    };
    let incCountY = () => {
        setCountY(currCountY => currCountY + 1);
    };

    // useEffect(function printSomething(){
    //     console.log("this is a side-effect");
    // });
    // useEffect(function printSomething(){
    //     console.log("this is a side-effect");
    // }, [countX, countY]);
    useEffect(function printSomething(){
        console.log("this is a side-effect");
    }, []);

    return (
        <div>
            <h3>Count = {countX}</h3>
            <button onClick={incCountX}>+1</button>
            <h3>Count = {countY}</h3>
            <button onClick={incCountY}>+1</button>
        </div>
    )
}