import './App.css'
import Form from './Form';
import CommentsForm from './CommentsForm';
import Counter from './Counter';
import Joker from './Joker';

function App() {
  /**
   * It maintains internal states
   * Once form is submitted as soon as all data is accessible in it.
   * Forms in React - 
   * The standard way with Forms is to use Controlled Components. 
   * So we make React state to be the "single source of truth"
   */

  /**
   * Handling Multiple Inputs - we create a common handleInputChange() for all elements
   * event.target.name - changed field
   * event.target.value - new value of the field
   */

  /**
   * useEffect() - The effect hook lets you perform side effects in function components
   * 
   * Data Fetching, setting up a subscription and manually changing
   * the DOM in React components are all examples of side effects.
   * 
   * Can be used in 3 major types -
   * a. we pass a function and called it as setu
   * b. we pass a function and called it as setup and dependencies (optional maybe state variables) -> means it calls every time during render and re rendering
   * c. we pass a function {setup} and  if dependenices left blank or empty it will not re render it.
   */

  /**
   * Use Cases - of useEffects :-
   * API Calls - Asynchronous Operations
   * in this during useState calls we can't use asynchronous functions for prinitng in UI
   */
  return (
    <>
      {/* <p>ReactJS | Forms</p> */}
      {/* <Form /> */}
      {/* <CommentsForm /> */}
      {/* <Counter /> */}
      <Joker />
    </>
  )
}

export default App
