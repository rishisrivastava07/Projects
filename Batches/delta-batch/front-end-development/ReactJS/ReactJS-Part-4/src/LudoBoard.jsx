import { useState } from "react";

export default function LudoBoard() {
    // to avoid use 4 mutliple useState we use objects
    // let [blueMove, setBlueMove] = useState(0);
    // let [yellowMove, setYellowMove] = useState(0);
    // let [greenMove, setGreenMove] = useState(0);
    // let [redMove, setRedMove] = useState(0);

    // Object used as a state variable
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

    // Arrays used as a state variable
    let [arr, SetArr] = useState(["no moves"]);

    let updateBlue = () => {
        // console.log(moves);
        // we need to sent the object as new to get detect by ReactJS to render again
        // so we spread the object before setting moves
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 }
        });

        SetArr((prevArr) => {
            return [...prevArr, "blue moves"]
        });
        console.log(arr);
    }
    let updateYellow = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 }
        });
        SetArr((prevArr) => {
            return [...prevArr, "yellow moves"]
        });
        console.log(arr);
    }
    let updateGreen = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 }
        });
        SetArr((prevArr) => {
            return [...prevArr, "green moves"]
        });
        console.log(arr);
    }
    let updateRed = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 }
        });

        SetArr((prevArr) => {
            return [...prevArr, "red moves"]
        });
        console.log(arr);
    }
    return (
        <div>
            <p>Game begins !</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button onClick={updateBlue} style={{ backgroundColor: "blue", color: "black" }}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button onClick={updateYellow} style={{ backgroundColor: "yellow", color: "black" }}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button onClick={updateGreen} style={{ backgroundColor: "green", color: "black" }}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button onClick={updateRed} style={{ backgroundColor: "red", color: "black" }}>+1</button>
            </div>
        </div>
    )
}