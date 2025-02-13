/**
 * Components are designed in three parts -
 * 1. props
 * 2. states
 * 3. events
 */
/**
 * Problems - 
 * There is no flexibility as we hard code the number of digits inputs 3 time and many more
 * The winning condition is also hard coded
 * Design level changes are not possible in previous code
 * 
 * Changes to Lottery Game -
 * 1. Make the Lottery tickets of N digit number
 * 2. The Winning Sum could be any feasible number.
 * 
 * Breakdown of components -
 * App -> {props} -> Lottery(Game Component) -> {props} -> Ticket -> 3 diff components -> TicketNum0, TicketNum1, TicketNum2 
 * Lifting State Up - common design pattern -> until all requirements may fullfilled
 */

/**
 * Components Types - 
 * i. Functional 
 * ii. Class
 * 
 * Another Level type Components -
 * i. Logical - (smart) -
 *      - do have any state variable
 *      - logical operations
 *      - must have state and may have props
 * ii. Presentational - (dumb) - 
 *      - UI 
 *      - don't have any state variable 
 *      - no state and may have props
 */

/**
 * Functions as props -
 * JS Function are 1st Class Objects
 * This means they can be passed to a function as arguments, returned from it & assigned to a variable.
 */
import { useState } from "react";
import "./Lottery.css";
import { generateNumbers, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n = 3, winCondition}) {
    let [ticket, setTicket] = useState(generateNumbers(n));
    let isWining = winCondition(ticket);

    let buyTicket = () => {
        setTicket(generateNumbers(n));
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div>
            <Button action={buyTicket}/>
            <h3>{isWining && "Congratulations, you won"}</h3>
        </div>
    )
}